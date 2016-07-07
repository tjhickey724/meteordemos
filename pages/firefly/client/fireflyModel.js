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
	if (this.y > 100) this.y=100;
	if (this.y < 0) this.y = 0;
	if (this.x >100) this.x=100;
	if (this.x<0) this.x = 0;

}


/*
  This represents the firefly game
	which consists of a set of fireflies
	and a firefly net on a 100x100 gameboard
*/
function FireflyModel(){
	this.w=100;
	this.h=100;
	this.net = new FireflyNet(0,0,10,"green");
	this.fireflyList = [];
	this.bgcolor="#eee";
	this.lastTime = (new Date()).getTime();
	this.counter = 0;
	this.running = false;
	this.score = 0;
	this.numblack=0;
	this.gameStart = new Date();
	this.gameTime = 0;
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
	var ffModel = this;
	const theDate = new Date();
	var theTime = theDate.getTime();
	var dt = theTime - this.lastTime; // in milliseconds
	this.lastTime = theTime;
	this.gameTime = (theDate - this.gameStart)/1000;
	//var fps = 1000/(dt);
	//console.log("fps="+fps);

	var theNet = this.net;
	_.each(this.fireflyList,
		   function(f){
			   f.update(dt/1000.0);
			   if (theNet.caught(f)) {
				   f.alive = false;
					 if (f.c=="red") {
						 ffModel.score = ffModel.score - 10;
					 }else {
						 ffModel.score = ffModel.score + 1;
					 }
			   }

		   }
	   );
	let numblack=0;
	console.log("look at fireflies!")
	console.dir(this.fireflyList);
	_.each(this.fireflyList,
		      function(f){if (f.c == "black") {
						//console.dir(f);
						numblack = numblack+1}
						else {
							//console.log(f.c)
						}
					});
	theModel.numblack = numblack;
	console.log("numblack is "+this.numblack);

	this.fireflyList = _.filter(this.fireflyList,
								function(f){return f.alive})

	if (this.fireflyList.length==0 || this.numblack==0) {
		console.log("Game Over");
		this.running = false;
	}
	//console.log(this.fireflyList.length);
}


/*
  initialize the Firefly game by
	adding two fireflies f1,f2 as specified
	adding 100 fireflies starting at (50,50)
	with random velocities in the range
	  [-5,5] pixels per millisecond
*/
FireflyModel.prototype.init = function() {
	theModel.fireflyList = [];
	for(var i =0; i<110; i++){
		const myvx = Math.random()*10-5;
		const myvy = (Math.random()-0.5)*10;
		const c = (i<10)?"red":"black";
		const s = (i<5)?5:1;

		theModel.addFirefly(new Firefly(50,50,s,c,myvx,myvy))
	}
	theModel.gameStart = new Date();
	theModel.gameTime=0;
	theModel.score=0;
	theModel.running=true;

}

// create a firefly gameboard
theModel = new FireflyModel();
// initialize it
theModel.init();
// return the firefly game as the "model"
// it will be updated in the gameloop...
return theModel;
}())
