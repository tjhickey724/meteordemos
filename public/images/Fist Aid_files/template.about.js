(function(){
Template.__checkName("about");
Template["about"] = new Template("Template.about", (function() {
  var view = this;
  return [ HTML.Raw("<h1>About</h1>\n\nHere is our team:\n"), HTML.TABLE({
    "class": "table table-bordered"
  }, "\n	", HTML.THEAD("\n		", HTML.TR("\n			", HTML.TH("Name"), "\n			", HTML.TH("Description"), "\n		"), "\n	"), "\n	", HTML.TBODY("\n		", HTML.TR("\n			", HTML.TD("Lawrence Sabir"), "\n			", HTML.TD("Bench warmer, doesnt get in that much but puts in a lot of work"), "\n		"), "\n		", HTML.TR(" \n			", HTML.TD('Destiny Morton "Team Captain"'), "\n			", HTML.TD("Team Captain she leads the team to victory every game! "), "\n		"), "\n		", HTML.TR("\n			", HTML.TD("Annie Jean Baptiste"), "\n			", HTML.TD("The greatest of all time"), "\n		"), "\n		", HTML.TR("\n			", HTML.TD("Paul Kelly"), "\n			", HTML.TD("Worker"), "\n		"), "\n\n\n	\n		", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("team")),
      _variable: "person"
    };
  }, function() {
    return [ "\n  		", Blaze._TemplateWith(function() {
      return {
        t: Spacebars.call(view.lookup("person"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("teamrow"));
    }), "\n		" ];
  }), "\n	"), "\n") ];
}));

Template.__checkName("teamrow");
Template["teamrow"] = new Template("Template.teamrow", (function() {
  var view = this;
  return HTML.TR("\n   	  ", HTML.TD(Blaze.View("lookup:t.name", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("t"), "name"));
  })), "\n   	  ", HTML.TD(Blaze.View("lookup:t.email", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("t"), "email"));
  })), "\n   ");
}));

}).call(this);
