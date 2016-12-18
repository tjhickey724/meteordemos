Template.yourReviews.helpers({
  reviews: function(v){
    console.dir(Meteor.userId());
    return Reviews.find(
      {version:v,reviewer:Meteor.userId()},
    {sort:{createdAt:-1}})},
})
