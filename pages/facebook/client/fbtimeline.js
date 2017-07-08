Template.fbtimeline.helpers({
  posts(){
    var myFriends = Friends.find({owner:Meteor.userId()}).fetch();
    var myFriendsList = _.map(myFriends,function(x){return x.friend});
    console.dir(myFriendsList);
    return Posts.find({owner:{$in:myFriendsList}},{sort:{createdAt:-1}})
    //return Posts.find();
  }
})

Template.fbmakepost.events({
  "click #submit"(event, instance){
    var profile = Profiles.findOne({owner:Meteor.userId()});
    var now = new Date();
    var text = instance.$("#fb-posttext").val();
    var post = {
      owner:Meteor.userId(),
      name:profile.name,
      likes:[],
      createdAt: now,
      text: text
    };
    console.dir(post);
    Posts.insert(post);
  }
})

Template.fbshowpost.helpers({
  owner(p){return p.owner==Meteor.userId();},
  numlikes(p){return p.likes.length;},
  likes(p){var zz= _.contains(p.likes,Meteor.userId());
      console.log("likes="+zz);
      return zz},

})

Template.fbshowpost.events({
  "click span.fbrmpost"(event,instance){
    if (this.p.owner==Meteor.userId()) {
      Posts.remove(this.p._id);
    }
  },

  "click span.fblikepost"(event,instance){
    console.log("liking!"+JSON.stringify(this.p.likes)+" "+Meteor.userId());
    var zz = _.contains(this.p.likes,Meteor.userId());
    console.log(zz);
    if (!zz)
      Posts.update(this.p._id,{$push:{likes:Meteor.userId()}});
  },

  "click span.fbunlikepost"(event,instance){
    console.log("liking!"+JSON.stringify(this.p.likes)+" "+Meteor.userId());
    var zz = _.contains(this.p.likes,Meteor.userId());
    console.log(zz);
    if (zz)
        Posts.update("AhnL4H6YtaSzpESpQ",{$pull:{likes:Meteor.userId()}})
  },
})
