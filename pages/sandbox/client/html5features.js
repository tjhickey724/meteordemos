var watchID;


Template.html5features.onCreated(function(){
  var myposition = new ReactiveVar({});
  this.position = myposition;
  this.orientation = new ReactiveVar({});
  watchID = navigator.geolocation.watchPosition(function(position) {
    myposition.set(position);
});

})


Template.html5features.helpers({
  position(){
        var instance = Template.instance();
        return instance.position.get();
      },
  orientation(){
    var instance = Template.instance();
    return instance.orientation.get();
  }

})

Template.html5features.events({
  "deviceorientation"(event,instance){
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    instance.orientation={absolute,alpha,beta,gamma};
  },
})
