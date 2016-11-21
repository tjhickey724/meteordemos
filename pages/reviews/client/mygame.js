function userEmail(){
  var user = Meteor.user();
  console.dir(user);
  if (user.services && user.services.google){
    return user.services.google.email;
  } else if (user.emails) {
    return user.emails[0].address;
  } else {
    return "no-email";
  }
}

Template.mygame.helpers({
  myreviews: function(){
    var myemail = userEmail();
    var myProfile = Members.findOne({email:myemail});
    var team = 0;
    if (myProfile) {team = myProfile.team;}
    console.log(myemail);
    console.dir(myProfile);
    var myReviews = Reviews.find({team:team});
    console.dir(myReviews.fetch());
    if (myemail == "tjhickey724@gmail.com"){
      return Reviews.find({},{sort:{team:1,rating:-1}});
    } else {
      return myReviews;
    }

  }
})
