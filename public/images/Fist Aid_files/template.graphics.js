(function(){
Template.__checkName("graphics");
Template["graphics"] = new Template("Template.graphics", (function() {
  var view = this;
  return HTML.Raw('<h1> Graphics Demo</h1>\n<div class="bg-info">\n<canvas id="canvas" width="600" height="300">\n</canvas>\n<button id="start">start</button>\n<button id="stop">stop</button>\n</div>');
}));

}).call(this);
