Template.quiz4.helpers({
  bios: function(){return Bios.find()},

})

Template.quiz4.events({
  "click .js-updatebio": function(event){
    const name=$(".js-name").val();
    const bio=$(".js-bio").val();
    const userId = Meteor.userId();
    const bioObj = {name,bio,userId};
    console.log("creating bio "+JSON.stringify(bioObj));
    const prev = Bios.findOne({userId});
    if (prev) Bios.remove(prev._id);
    Bios.insert(bioObj);
  }
})
