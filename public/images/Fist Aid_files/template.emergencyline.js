(function(){
Template.__checkName("emergencyline");
Template["emergencyline"] = new Template("Template.emergencyline", (function() {
  var view = this;
  return [ HTML.Raw("<h1>Emergency Line</h1>\n	"), HTML.TABLE({
    "class": "table table-bordered"
  }, "\n	", HTML.TBODY("\n	", HTML.TR(" \n		", HTML.TD("Brandeis Police"), "\n		", HTML.TD("781-736-3333"), "\n	"), "\n	", HTML.TR("\n		", HTML.TD("Health Center"), "\n		", HTML.TD("781-736-3677"), "\n	"), "\n	", HTML.TR("\n		", HTML.TD("Rape Crisis"), "\n		", HTML.TD("781-736-3370"), "\n		\n	"), "\n	", HTML.TR("\n		", HTML.TD("BEMCo"), "\n		", HTML.TD("781-736-6333"), "\n	"), "\n\n		", Blaze.Each(function() {
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

}).call(this);
