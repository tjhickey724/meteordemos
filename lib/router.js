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
Router.route('pokemon');
Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
	 return c;
 }});


Router.route('apidemo');

Router.route('firefly');

Router.route('sponsors')

Router.route('draw')

Router.route('graphics')

Router.route('fbprofile')
Router.route('fbusers')
Router.route('fbtimeline')
Router.route('fbuser/:_id',
{name:"fbuser",
 data: function(){
	 const user = Profiles.findOne(this.params._id);
	 return user;
 }});


Router.route('game');

Router.route('sandbox');
