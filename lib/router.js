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
Router.route('apidemo');

Router.route('firefly');

Router.route('sponsors')

Router.route('draw')

Router.route('graphics')

Router.route('quiz4');


Router.route('/fullbio/:_id',
	{name:'fullbio',
	template:'fullbio',
	data: function(){ return Bios.findOne({_id:this.params._id})}
});



Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});
