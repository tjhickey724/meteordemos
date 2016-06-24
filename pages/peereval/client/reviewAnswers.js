Template.reviewAnswers.helpers({
  question: function(){console.dir(this.q.question); return this.q.question},
  answers: function(){
    const answerList = Answers.find({question:this.q._id});
    return answerList}

})

Template.reviewAnswers.events({
  "click js-answer-list": function(event){
    console.log("clicked on answer list");
  }
})

Template.reviewAnswer.events({
  "click .js-submit-review": function(event){
    console.log("you clicked on the submit review button!");
    const rating = $(".js-rate-answer").val();
    const theReview = $(".js-review-answer").val();
    const reviewObj =
      {rating:rating,
       review:theReview,
       createdAt: new Date(),
       createdBy: Meteor.userId(),
       question: toReview.question,
       answer: toReview._id};
    console.dir(reviewObj);
    // I should send myAnswer to this as a parameter
    Answers.update(myAnswer._id,{$push:{myReviews:toReview._id}});
    Answers.update(toReview._id,{$push:{myReviewers:Meteor.userId()}});
    Reviews.insert(reviewObj);
    //Router.go('/showQuestions')
    updateToReview();
  }
})
