(function(){
Template.__checkName("comments");
Template["comments"] = new Template("Template.comments", (function() {
  var view = this;
  return [ HTML.Raw("Please leave a comment:\n<br>\n"), HTML.TEXTAREA({
    id: "comment",
    cols: "20",
    rows: "10"
  }), HTML.Raw('\n<br>\n<button id="submitcomment" class="btn btn-lg bg-primary">Submit Comment</button>\n<br>\nHere are all the comments! \n<br>\n\n'), HTML.UL("\n", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("commentlist")),
      _variable: "c"
    };
  }, function() {
    return [ "\n", HTML.LI(Blaze.View("lookup:c.date", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("c"), "date"));
    }), ":  ", Blaze.View("lookup:c.comment", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("c"), "comment"));
    })), "\n" ];
  }), "\n") ];
}));

}).call(this);
