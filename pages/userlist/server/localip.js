Meteor.publish("connections",function(){return Connections.find();});

Meteor.methods({

  getInfo: function(){
    const z = Meteor.user();
    //console.dir(z);
    var name = z.profile.name;
    if (!name && z.emails) {
      name = z.emails[0].address;
    }
    //console.log("users name is "+name);
    Connections.remove({localIP:this.connection.clientAddress});
    Connections.insert(
      {userName:name,
       localIP:this.connection.clientAddress,
       createdAt:(new Date())});
    return this.connection.clientAddress;
  }
})
