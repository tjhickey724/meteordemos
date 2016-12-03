Template.yourReviews.helpers({
  reviews: function(v){
    return Reviews.find(
      {version:v,reviewer:Meteor.userId()},
    {sort:{createdAt:-1}})},
})
