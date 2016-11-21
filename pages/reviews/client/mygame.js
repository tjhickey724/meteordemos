function userEmail(){
  var user = Meteor.user();
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
    console.log(myemail);
    console.dir(myProfile);
    var myReviews = Reviews.find({team:myProfile.team});
    console.dir(myReviews.fetch());
    if (myemail == "tjhickey@brandeis.edu"){
      return Reviews.find({},{sort:{team:1,rating:-1}});
    } else {
      return myReviews;
    }

  }
})
