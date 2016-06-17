Template.reviewAnswers.helpers({
  question: function(){console.dir(this.q.question); return this.q.question},
  answer: function(){return this.a.answer}

})

Template.reviewAnswers.events({
  "click .js-submit-review": function(event){
    console.log("you clicked on the submit review button!");
    const rating = $(".js-rate-answer").val();
    const theReview = $(".js-review-answer").val();
    const reviewObj =
      {rating:rating,
       review:theReview,
       createdAt: new Date(),
       createdBy: Meteor.userId(),
       question: this.a.question,
       answer: this.a._id};
    console.dir(reviewObj);
    const myAnswer = Answers.findOne({createdBy:Meteor.userId()});
    myAnswer.myReviews.push(this.a.createdBy);
    Answers.update(myAnswer._id,myAnswer);
    Reviews.insert(reviewObj);
    Router.go('/showQuestions')
  }
})
