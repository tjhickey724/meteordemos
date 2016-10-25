(function(){
Template.__checkName("contact");
Template["contact"] = new Template("Template.contact", (function() {
  var view = this;
  return HTML.DIV({
    style: "text-align: center;position:relative;top:250px"
  }, HTML.Raw("\n\n    <h1>Contact us</h1>\n      <p> You can contact the authors at <br>\n      ajeanbaptiste@brandeis.edu <br>\n      destiny2016@brandeis.edu <br>\n      lbutlersabir@brandeis.edu <br>\n      pkelly781@brandeis.edu <br> </p>\n\n\n      "), HTML.FORM("\n      	", HTML.TEXTAREA({
    cols: "50",
    rows: "5"
  }), HTML.Raw("<br>"), "\n      	", HTML.Raw("<button>Submit</button>"), "\n      "), "\n  ");
}));

}).call(this);
