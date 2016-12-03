function userEmail(){
  var user = Meteor.user();
  if (user.services.google){
    return user.services.google.email;
  } else if (user.emails) {
    return user.emails[0].address;
  } else {
    return "no-email";
  }
}
Session.set("teamURL","");
Session.set("teamTitle","");
Session.set("teamMates","");
Session.set("teamNum",0);


Meteor.subscribe("teams");
Meteor.subscribe("members");
Meteor.subscribe("myreviews");


Template.reviewForm.helpers({
  teams: function(){
    return Teams.find(
      {reviewers:{$not:{$in:[Meteor.userId()]}}},
      {sort:{num:1}}
    )},
  reviews: function(){
    return Reviews.find({reviewer:Meteor.userId()})},
  numReviews: function(team ){
    return team.reviewers.length;},
  teamURL: function(){return Session.get("teamURL");},
  teamTitle: function(){return Session.get("teamTitle");},
  teamMates: function(){return Session.get("teamMates");},
});



Template.reviewForm.events({
  "change #team": function(event){
    event.preventDefault();
    //console.dir(this);
    var teamNum=parseInt($("#team").val());

    var team = Teams.findOne({num:teamNum});
    Session.set("teamURL",team.url);
    Session.set("teamTitle",team.title);
    Session.set("teamNum",team.num);
    var teamMates = Members.find({team:teamNum}).fetch();
    //console.dir(teamMates);
    var teamMembers="by ";
    teamMates.forEach(function(s){
      //console.dir(s.name+" -- "+teamMembers);
      teamMembers = teamMembers.concat(s.name+" and ")
    });
    teamMembers = teamMembers.concat(" "+team.teamname);
    //console.dir(teamMembers);
    Session.set("teamMates",teamMembers);
  },

  "click #submitReview": function(event){
    //console.log("inserting!")
    event.preventDefault();
    var eventName = $("#eventName").val()
    var team=parseInt($("#team").val());
    //console.log("you selected team "+team);
    var like=$("#likeAboutGame").val();
    //console.log(like);
    var improve = $("#improveGame").val();
    //console.log(improve);
    var rating = $("#rating").val();
    //console.log("rating = "+rating);
    var reviewer=Meteor.userId();
    var theTeam = Teams.findOne({num:team});
    var email = userEmail();
    var createdAt = new Date();
    Teams.update(theTeam._id,{$push:{reviewers:reviewer}})
    var review=
       {eventName:eventName,
        team:team,
        like:like,
        improve:improve,
        rating:rating,
        reviewer:reviewer,
        email:email,
        createdAt:createdAt,
        version:"fp"};
    Reviews.insert(review);
    $("#likeAboutGame").val("");
    $("#improveGame").val("");

  },

  "click #teamGo": function (event){
    event.preventDefault();
    var teamNum = parseInt($("#teamNum").val());
    //console.log(teamNum);
    var team = Teams.findOne({num:teamNum});
    //console.dir(team);
    //console.log("calling updateTeamInfo");
    updateTeamInfo(team);
  }


});

function updateTeamInfo(team){
  //console.dir(team);
  Session.set("teamURL",team.url);
  Session.set("teamTitle",team.title);
  Session.set("teamNum",team.num);
  var teamMates = Members.find({team:team.num}).fetch();
  //console.dir(teamMates);
  var teamMembers="by ";
  teamMates.forEach(function(s){
    //console.dir(s.name+" -- "+teamMembers);
    teamMembers = teamMembers.concat(s.name+" and ")
  });
  teamMembers = teamMembers.concat(" "+team.teamname);
  //console.dir(teamMembers);
  Session.set("teamMates",teamMembers);
}

Template.reviewEntry.helpers({
  title: function(n){
    //console.log(n-0);
    var zz = Teams.findOne({num:n-0});
    //console.dir(zz);
    return zz.title}
});

Template.reviewEntry.events({
  "click .deleteReview": function(event){
    //console.dir(this);
    team = Teams.findOne({num:this.review.team});
    Teams.update(team._id,
      {$set:
        {reviewers:_.without(team.reviewers,Meteor.userId())}});
    Reviews.remove(this.review._id);
  }
});

Template.teamlist.helpers({

})
