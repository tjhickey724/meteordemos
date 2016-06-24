theModel = (function() {

/*
  FireflyNet represents the net that the user
	drags around the screen
*/
function FireflyNet(x,y,r,c) {
	this.x=x; this.y=y; this.r=r; this.c=c;
}

FireflyNet.prototype.caught = function(f) {
	var d = distFromOrigin(f.x-this.x,f.y-this.y);
	return(d<(f.r+this.r));
}

function distFromOrigin(x,y) { return Math.sqrt(x*x + y*y);}

/*
  Firefly represents a firefly
	which has a position (x,y)
	velocity (vx,vy)
	color c
	and size (or radius) r
	It moves around the screen according
	to its velocity and bounces off the four
	walls.
*/
function Firefly(x,y,r,c,vx,vy){
	this.x=x;
	this.y=y;
	this.r=r;
	this.c=c;
	this.vx=vx;
	this.vy=vy;
	this.alive = true;
}

/*
  this updates the position of the firefly
	and bounces it off the walls
*/
Firefly.prototype.update = function(dt){
	if ((this.y + this.r >= 100) || (this.y - this.r <= 0)) this.vy *= -1;
	if ((this.x + this.r >= 100 )|| (this.x - this.r <= 0)) this.vx *= -1;
	this.x += this.vx*dt;
	this.y += this.vy*dt;

}


/*
  This represents the firefly game
	which consists of a set of fireflies
	and a firefly net on a 100x100 gameboard
*/
function FireflyModel(){
	this.w=100;
	this.h=100;
	this.net = new FireflyNet(10,10,10,"green");
	this.fireflyList = [];
	this.bgcolor="#eee";
	this.lastTime = (new Date()).getTime();
	this.counter = 0;
	this.running = false;
}

/*
  add the firefly to the board
*/
FireflyModel.prototype.addFirefly = function(f){
	this.fireflyList.push(f);
}

/*
  update the positions of all of the fireflies
	mark those fireflies that are caught by the net
	remove the marked fireflies from the gameboard
*/
FireflyModel.prototype.update = function(){
	var theTime = (new Date()).getTime();
	var dt = theTime - this.lastTime; // in milliseconds
	this.lastTime = theTime;
	//var fps = 1000/(dt);
	//console.log("fps="+fps);

	var theNet = this.net;
	_.each(this.fireflyList,
		   function(f){
			   f.update(dt/1000.0);
			   if (theNet.caught(f)) {
				   f.alive = false;
			   }

		   }
	   );
	this.fireflyList = _.filter(this.fireflyList,
								function(f){return f.alive})
}


/*
  initialize the Firefly game by
	adding two fireflies f1,f2 as specified
	adding 100 fireflies starting at (50,50)
	with random velocities in the range
	  [-5,5] pixels per millisecond
*/
FireflyModel.prototype.init = function() {

	var f1 = new Firefly(50,50,5,"black",10,-5);
	var f2 = new Firefly(50,50,10,"red",45,15);
	theModel.addFirefly(f1);
	theModel.addFirefly(f2);
	for(var i =0; i<100; i++){
		var myvx = Math.random()*10-5;
		var myvy = (Math.random()-0.5)*10;
		var c = (Math.random()<0.5)?"red":"black";
		theModel.addFirefly(new Firefly(50,50,1,c,myvx,myvy))
	}
}

// create a firefly gameboard
theModel = new FireflyModel();
// initialize it
theModel.init();
// return the firefly game as the "model"
// it will be updated in the gameloop...
return theModel;
}())
