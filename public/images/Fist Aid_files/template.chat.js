(function(){
Template.__checkName("chat");
Template["chat"] = new Template("Template.chat", (function() {
  var view = this;
  return [ HTML.Raw("<div>\n    <h1>Want direct assistance?</h1>\n    <p>Chat away. Be Professional!</p>\n  </div>\n  <h3>You've got the right app!!!</h3>\n  "), Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n    ", HTML.INPUT({
      type: "text",
      "class": "js-chatinput"
    }), "\n    ", HTML.BR(), "\n    ", HTML.BUTTON({
      "class": "btn btn-info btn-large js-chatsubmit"
    }, "Submit"), "\n    ", HTML.HR(), "\n    ", HTML.H2("Last Five Chats:"), "\n    ", HTML.UL("\n      ", Blaze.Each(function() {
      return {
        _sequence: Spacebars.call(view.lookup("chatlines")),
        _variable: "chat"
      };
    }, function() {
      return [ "\n      ", HTML.LI(HTML.B(Blaze.View("lookup:userEmail", function() {
        return Spacebars.mustache(view.lookup("userEmail"), Spacebars.dot(view.lookup("chat"), "createdBy"));
      })), "\n        / ", HTML.I(Blaze.View("lookup:chat.createdAt", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("chat"), "createdAt"));
      })), "\n        ", HTML.BR(), "\n        ", Blaze.View("lookup:chat.text", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("chat"), "text"));
      }), "\n        ", HTML.HR(), "\n      "), "\n      " ];
    }), "\n    "), "\n    ", HTML.HR(), "\n  " ];
  }, function() {
    return [ "\n    ", HTML.H2("You must log in to see the chats"), "\n  " ];
  }) ];
}));

Template.__checkName("chatline");
Template["chatline"] = new Template("Template.chatline", (function() {
  var view = this;
  return HTML.LI("\n    ", Blaze.View("lookup:c.text", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("c"), "text"));
  }), "\n    ", Blaze.View("lookup:c.createdAt", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("c"), "createdAt"));
  }), "\n    ", Blaze.View("lookup:author", function() {
    return Spacebars.mustache(view.lookup("author"), Spacebars.dot(view.lookup("c"), "createdBy"));
  }), "\n    ", Blaze.View("lookup:c.createdBy", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("c"), "createdBy"));
  }), "\n  ");
}));

}).call(this);
