function userEmail(){
  var user = Meteor.user();
  if (user.services.google){
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
    var myReviews = Reviews.find({team:myProfile.team});
    console.dir(myReviews.fetch());
    if (myemail == "tjhickey@brandeis.edu"){
      return Reviews.find({},{sort:{team:1}});
    } else {
      return myReviews;
    }

  }
})
