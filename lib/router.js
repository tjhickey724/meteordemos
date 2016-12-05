Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('userList');
Router.route('contact');
Router.route('chat');

Router.route('ourteam');
Router.route('abdomen');
Router.route('chestpain');
Router.route('severebleeding');
Router.route('choking');
Router.route('difficultybreathing');
Router.route('coughing');
Router.route('fever');
Router.route('backpain');
Router.route('neckpain');
Router.route('nightsweats');
Router.route('morningsickness');
Router.route('seizure');


Router.route('symptoms');

Router.route('emergencyline');

Router.route('comments');

Router.route('about');
Router.route('pokemon');
Router.route('reviews');
Router.route('yourReviews');
Router.route('showTeams');
Router.route('mygame');

Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
	 return c;
 }});

Router.route('apidemo');



Router.route('sponsors')

Router.route('EmergencyInformation')

Router.route('graphics')
