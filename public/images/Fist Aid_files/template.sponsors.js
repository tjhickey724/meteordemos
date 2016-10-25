(function(){
Template.__checkName("sponsors");
Template["sponsors"] = new Template("Template.sponsors", (function() {
  var view = this;
  return [ HTML.Raw("<h1>We wish we had these sponsors!</h1>\n	"), Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("sponsorData")),
      _variable: "s"
    };
  }, function() {
    return [ "\n		", HTML.HR(), "\n		", Blaze.View("lookup:s.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("s"), "name"));
    }), ": ", Blaze.View("lookup:s.amt", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("s"), "amt"));
    }), "\n	" ];
  }) ];
}));

}).call(this);
