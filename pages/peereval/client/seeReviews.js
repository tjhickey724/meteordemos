Template.seeReviews.helpers({
  reviewlist:function(){
    console.dir(this);
    return this.reviews},
  answer: function(){
    const a = Answers.findOne({question:this.reviews[0].question});
    const q = Questions.findOne({_id:a.question});
    const z = {a:a, q:q};
    console.dir(z);
    return z;
  }
})
