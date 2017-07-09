

Template.fbprofile.helpers({
  user(){
    var theProfile = Profiles.findOne({owner:Meteor.userId()});
    if (!theProfile){
      var k = Profiles.find().count();
      Profiles.insert({name:"anonymous"+k,program:'other',owner:Meteor.userId()});
      theProfile = Profiles.findOne({owner:Meteor.userId()});
    }
    return theProfile;

   },




})






Template.fbinfo.events({
  "click #js-submit"(event,instance){
    name = instance.$('#js-name').val();
    url = instance.$('#js-url').val();
    bio = instance.$('#js-bio').val();
    program = instance.$('#js-program').val();
    console.log('just read '+name);
    this.user.name = name;
    this.user.url = url;
    this.user.bio = bio;
    this.user.program = program;
    var zz = Profiles.update(this.user._id,this.user);
    //Router.go('/fbuser/'+this.user._id);

  }
})
