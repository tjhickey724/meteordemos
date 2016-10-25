(function(){Meteor.methods({
  "removeAll": function(){
    Connections.remove({});
    console.log("removed everything!");
  },

  
})

}).call(this);
