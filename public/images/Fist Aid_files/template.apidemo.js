(function(){
Template.__checkName("Information");
Template["Information"] = new Template("Template.Information", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row"
  }, "\n  ", HTML.DIV({
    "class": "col-md-5 col-md-offset-1 bg-info"
  }, "\n    ", HTML.Raw("<h1>RecipePuppy API Demo</h1>"), "\n\n    ingredient to use: ", HTML.Raw('<input type="text" class="js-ingr">'), HTML.Raw("<br>"), "\n    dish to make: ", HTML.Raw('<input type="text" class="js-dish">'), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n    ", HTML.Raw('<button class="js-recipe">Get Recipe!</button>'), HTML.Raw("<br>"), "\n    ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n    ", HTML.TABLE({
    "class": "bg-warning table table-bordered table-striped"
  }, "\n      ", HTML.TBODY("\n        ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("recipes")),
      _variable: "r"
    };
  }, function() {
    return [ "\n          ", HTML.TR("\n            ", HTML.TD(HTML.A({
      href: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("r"), "href"));
      }
    }, HTML.IMG({
      src: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("r"), "thumbnail"));
      },
      width: "100"
    }))), "\n            ", HTML.TD(HTML.B(Blaze.View("lookup:r.title", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("r"), "title"));
    }), ":"), " ", Blaze.View("lookup:r.ingredients", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("r"), "ingredients"));
    }), " "), "\n          "), "\n        " ];
  }), "\n      "), "\n    "), "\n\n  "), "\n\n  ", HTML.DIV({
    "class": "col-md-5  col-md-offset-1 bg-info"
  }, "\n    ", HTML.Raw("<h1>Zipcode API demo</h1>"), "\n    Enter your zipcode: ", HTML.Raw('<input type="text" class="js-zip">'), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n    ", HTML.Raw('<button class="js-zipcode">Get Location Information</button>'), HTML.Raw("<br>"), "\n    ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("zipinfo"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": "bg-warning"
    }, "\n      The Zipcode ", Blaze.View("lookup:zipinfo.zip_code", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("zipinfo"), "zip_code"));
    }), " is in\n      ", Blaze.View("lookup:zipinfo.city", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("zipinfo"), "city"));
    }), ", ", Blaze.View("lookup:zipinfo.state", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("zipinfo"), "state"));
    }), HTML.BR(), "\n      and the lattitude and longitude of that location is", HTML.BR(), "\n      lat=", Blaze.View("lookup:zipinfo.lat", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("zipinfo"), "lat"));
    }), "  lng=", Blaze.View("lookup:zipinfo.lng", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("zipinfo"), "lng"));
    }), "\n    "), "\n    " ];
  }), "\n    ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\n  "), "\n");
}));

}).call(this);
