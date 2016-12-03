Template.yourReviews.helpers({
  reviews: function(){
    return Reviews.find({reviewer:Meteor.userId()})},
})
