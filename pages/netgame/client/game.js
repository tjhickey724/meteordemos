Template.game.helpers({
  avatars(){return Avatars.find({},{sort:{score:-1}})}
})

Template.game.onCreated(function(){
  var instance = this;
  $(window).on('keydown', function(e){
    //console.log(e.key);
    updateAvatar(event,instance);
  });
});

Template.game.onRendered(function(){
  ctx = drawSpace.getContext('2d');

  gameLoop();
  //console.log('onRendered: started gameloop');
});

function updateAvatar(event,instance){
  //console.log("keydown event handler 1");
  //console.dir(event);
  //console.dir(instance);
  avatar = Avatars.findOne(
    {owner:Meteor.userId()});
  //console.log(JSON.stringify(avatar));
  //console.dir(event);
  if (!avatar){
    return;

  }
  switch (event.key) {
    case 'w': case 'ArrowUp':
      avatar.y -= 5;
      break;
    case 's': case 'ArrowDown':
      avatar.y += 5;
      break;
    case 'a': case 'ArrowLeft':
      avatar.x -= 5;
      break;
    case 'd': case 'ArrowRight':
      avatar.x += 5;
      break;
  }
  //console.log(JSON.stringify(avatar));
  Avatars.update(avatar._id,avatar);
  var jewel = Jewels.findOne({x:avatar.x,y:avatar.y});
  if (jewel) {
    (new Audio('/sounds/good.wav')).play();
    avatar.score += 1;
    Avatars.update(avatar._id,avatar);
    Jewels.update(jewel._id,
      {x:Math.floor(Math.random()*60)*10,
       y:Math.floor(Math.random()*60)*10,
      })
  }
};

Template.game.onDestroyed(function(){
  //console.log('in onDestroyed');
  var instance = Template.instance();
  Avatars.remove(instance.avatarid.get())
  //console.log('onDestroyed: removing Avatar '+
  //   instance.avatarid.get())
});

Template.game.events({
  "click #join"(event,instance){
    var user = Meteor.userId();
    if (!user){
      alert("You must be logged in to join the game!");
      return;
    }
    if (event.target.innerHTML=="Join"){
      event.target.innerHTML = "Leave";
      var avatar = Avatars.findOne({owner:Meteor.userId()});
      while (avatar) {
         if (avatar) {
           //console.log("removing "+avatar._id);
           Avatars.remove(avatar._id);
         }
         avatar = Avatars.findOne({owner:Meteor.userId()})
      }
      //console.dir(avatarColor);
      name = instance.$("#name").val();
      if (name=="") {
        name="anon";
      }
      avatar = {x:100,y:100,color:avatarColor.value,score:0,name:name,owner:Meteor.userId()}
      Avatars.insert(avatar);
    }
    else {
      event.target.innerHTML = "Join";
      var avatar = Avatars.findOne({owner:Meteor.userId()});
      while (avatar) {
         if (avatar) {
           //console.log("removing "+avatar._id);
           Avatars.remove(avatar._id);
         }
         avatar = Avatars.findOne({owner:Meteor.userId()})
      }
    }
  },

})

var  ctx, raf;


function clear() {
  ctx.fillStyle = 'rgba(220,225,235,0.3)';
  ctx.fillRect(0,0,drawSpace.width,drawSpace.height);
}


function gameLoop() {
  clear();

  jewels = Jewels.find().fetch();
  jewels.forEach(function(j){

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(j.x+5,j.y+5,10,0,Math.PI*2);
    ctx.fill();
  })
  avatars = Avatars.find().fetch();
  if (avatars.length>0){
    var winner=avatars[0];
    avatars.forEach(function(avatar){
      if (avatar.score>winner.score) {
        winner = avatar;
      }
      ctx.fillStyle = avatar.color;
      ctx.fillRect(avatar.x,avatar.y,10,10);
    })
    if (winner.score >= 10) {
      alert("Game Over! The Winner is "+winner.name+"\n who can be next?");
      winner.score=0;
      Avatars.update(winner._id,winner);
    }
  }
  raf = window.requestAnimationFrame(gameLoop);

}
