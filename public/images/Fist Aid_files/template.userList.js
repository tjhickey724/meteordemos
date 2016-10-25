(function(){
Template.__checkName("userList");
Template["userList"] = new Template("Template.userList", (function() {
  var view = this;
  return [ Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n  ", HTML.BUTTON({
      "class": "add-me-js"
    }, "Add me"), "\n  ", HTML.BUTTON({
      "class": "js-remove-all"
    }, "Clear"), "\n  " ];
  }, function() {
    return "\n  You must log in before you can add yourself\n  ";
  }), "\n  ", HTML.OL("\n    ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("connections")),
      _variable: "connection"
    };
  }, function() {
    return [ "\n    ", HTML.LI(" ", HTML.A({
      href: function() {
        return [ "http://", Spacebars.mustache(Spacebars.dot(view.lookup("connection"), "localIP")), ":3000" ];
      }
    }, "\n      ", Blaze.View("lookup:connection.userName", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("connection"), "userName"));
    }), " at ", Blaze.View("lookup:connection.localIP", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("connection"), "localIP"));
    }), "\n    ")), "\n    " ];
  }), "\n  ") ];
}));

}).call(this);
