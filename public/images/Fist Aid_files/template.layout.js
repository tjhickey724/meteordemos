(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container",
    style: "background-image: url('images/heart.png'); background-repeat: no-repeat; background-size:100%"
  }, HTML.Raw("\n\n		<!-- Here is the standard Bootstrap code for a Navigation bar taken directly from getbootstrap.com/components -->\n		"), HTML.NAV({
    "class": "navbar navbar-default"
  }, "\n		  ", HTML.DIV({
    "class": "container-fluid"
  }, "\n		    ", HTML.Raw("<!-- Brand and toggle get grouped for better mobile display -->"), "\n		    ", HTML.DIV({
    "class": "navbar-header"
  }, "\n		      ", HTML.Raw('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n		        <span class="sr-only">Toggle navigation</span>\n		        <span class="icon-bar"></span>\n		        <span class="icon-bar"></span>\n		        <span class="icon-bar"></span>\n		      </button>'), "\n		      ", HTML.A({
    "class": "navbar-brand",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    }
  }, "\n		      	First Aid "), "\n		    "), "\n\n		    ", HTML.Raw("<!-- Collect the nav links, forms, and other content for toggling -->"), "\n		    ", HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "bs-example-navbar-collapse-1"
  }, "\n		      	", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n							", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "about");
    }
  }, "About")), "\n							", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "sponsors");
    }
  }, "Sponsors")), "\n							\n							", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "draw");
    }
  }, "Feedbacks")), "\n							", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "emergencyline");
    }
  }, "Emergency Line")), "\n\n							", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "comments");
    }
  }, "Comments")), "\n\n\n							", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "contact");
    }
  }, "Contact us")), "\n							", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "chat");
    }
  }, "Chat")), "\n							\n							", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "userList");
    }
  }, "Users")), "\n						"), "\n			    ", HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, "\n			            ", Spacebars.include(view.lookupTemplate("loginButtons")), " ", HTML.Raw("<!-- here -->"), "\n			    "), "\n		    "), HTML.Raw("<!-- /.navbar-collapse -->"), "\n\n		  "), HTML.Raw("<!-- /.container-fluid -->"), "\n		"), HTML.Raw("\n\n		<!-- Here is where the actual content of the page gets inserted by the router! -->\n		"), Spacebars.include(view.lookupTemplate("yield")), "\n\n	");
}));

}).call(this);
