Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('userList');
Router.route('contact');
Router.route('chat');
<<<<<<< HEAD
Router.route('ourteam');
Router.route('abdomen');
Router.route('chestpain');
Router.route('bloodinstool');
Router.route('difficultyswallowing');
Router.route('diarrhea');
Router.route('coughing');
Router.route('fever');
Router.route('backpain');
Router.route('neckpain');
Router.route('nightsweats');
Router.route('morningsickness');
Router.route('seizure');

Router.route('apidemo');
Router.route('symptoms');

Router.route('emergencyline');

Router.route('comments');
=======
Router.route('about');
Router.route('pokemon');
Router.route('reviews');
Router.route('yourReviews');
Router.route('showTeams');
Router.route('mygame');
>>>>>>> tjhickey724/master
Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
	 return c;
 }});
<<<<<<< HEAD
 
=======

Router.route('apidemo');
>>>>>>> tjhickey724/master


Router.route('sponsors')

Router.route('EmergencyInformation')

Router.route('graphics')
