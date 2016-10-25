Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('userList');
Router.route('contact');
Router.route('chat');
Router.route('about');
Router.route('bills');
Router.route('bill/:_id',
{name:"bill",
 data: function(){
	 const c = Bills.findOne(this.params._id);
	 return c;
 }});
 
Router.route('apidemo');

Router.route('firefly');

Router.route('sponsors')

Router.route('ReportCard')

Router.route('graphics')
Router.route('comments')
