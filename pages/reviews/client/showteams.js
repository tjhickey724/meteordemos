Template.showTeams.helpers({
  teams:function(){
    return Teams.find({},{sort:{num:1}});
  },

  numReviews: function(team ){
    return team.reviewers.length;
  },

  members: function(team){
    return Members.find({team:team.num});
  },



})


Template.showTeam.helpers({
  grade: function(){
    if (this.team.score){
      return Math.ceil(this.team.score*10);
    }
    else {
      return "";
    }
  },

  numReviews: function(){
    if (this.team.score){
      return this.team.reviewers.length + " reviews";
    }
    else {
      return "";
    }
  }
})
