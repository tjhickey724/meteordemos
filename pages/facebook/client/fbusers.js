
Template.fbusers.helpers({
  users(){return Profiles.find();},
})
Template.fbperson.helpers({
  isFriend(){return Friends.findOne({owner:this.u.owner,friend:Meteor.userId()})}
})

Template.fbperson.events({
  "click #js-friend"(event, instance){
    Friends.insert({owner:this.u.owner,friend:Meteor.userId()})
  },
  "click #js-defriend"(event,instance){
    var z = Friends.findOne({owner:this.u.owner,friend:Meteor.userId()});
    Friends.remove(z._id);
  },

})
