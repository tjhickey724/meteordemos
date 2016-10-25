(function(){
Template.__checkName("Emergency Information");
Template["Emergency Information"] = new Template("Template.Emergency Information", (function() {
  var view = this;
  return [ HTML.Raw("<h1>List of Pokemon</h1>\n\n  "), Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("pokedex")),
      _variable: "pokemon"
    };
  }, function() {
    return [ "\n     ", HTML.A({
      href: ""
    }, Blaze.View("lookup:pokemon.ename", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("pokemon"), "ename"));
    })), "\n  " ];
  }), HTML.Raw("\n  <hr>") ];
}));

}).call(this);
