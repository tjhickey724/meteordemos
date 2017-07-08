Template.fbprofile.helpers({
  user(){
    var theProfile = Profiles.findOne({owner:Meteor.userId()});
    if (!theProfile){
      var k = Profiles.find().count();
      Profiles.insert({name:"anonymous"+k,owner:Meteor.userId()});
    } else {
    return theProfile
    }
   },


})


Template.fbinfo.events({
  "click #js-submit"(event,instance){
    name = instance.$('#js-name').val();
    url = instance.$('#js-url').val();
    bio = instance.$('#js-bio').val();
    console.log('just read '+name);
    this.user.name = name;
    this.user.url = url;
    this.user.bio = bio;
    var zz = Profiles.update(this.user._id,this.user);
    Router.go('/fbuser/'+this.user._id);
  }
})
