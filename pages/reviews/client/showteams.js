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
