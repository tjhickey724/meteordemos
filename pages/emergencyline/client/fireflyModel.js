

/*
  FireflyNet represents the net that the user
	drags around the screen
*/
class FireflyNet {
	constructor(x,y,r,c) {
		this.x=x; this.y=y; this.r=r; this.c=c;
	}

	caught(f) {
		const d = distFromOrigin(f.x-this.x,f.y-this.y);
		return(d<(f.r+this.r));
	}

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
class Firefly {
	constructor(x,y,r,c,vx,vy){
		this.x=x;this.y=y; //position of firefly
		this.r=r; // radius
		this.c=c; // color
		this.vx=vx; // horizontal velocity
		this.vy=vy; // vertical velocity
		this.alive = true; // has it been caught?
	}

	update(dt){
		// get the speed of the firefly
		const xspeed = Math.abs(this.vx);
		const yspeed = Math.abs(this.vy);
		// if the firefly goes off the screen flip its direction
		if ((this.y + this.r  >= theModel.h) ) // past top edge
			this.vy = -yspeed;
		if ((this.y - this.r <= 0)) // past bottom edge
			this.vy = yspeed;
		if ((this.x + this.r >= theModel.w )) // past right edge
			this.vx = -xspeed;
		if ((this.x - this.r <= 0)) //past left edge
			this.vx = xspeed;
		// use the velocity and the time since last update
		// to calculate the new position of the firefly
		this.x += this.vx*dt;
		this.y += this.vy*dt;
	}

}



/*
  This represents the firefly game
	which consists of a set of fireflies
	and a firefly net on a 100x100 gameboard
*/
class FireflyModel {
	constructor(){
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
		this.numred=0;
		this.gameStart = new Date();
		this.gameTime = 0;
	}

	addFirefly(f){
		this.fireflyList.push(f);
	}

	init() {
		theModel.fireflyList = [];
		for(let i =0; i<110; i++){
			const myvx = Math.random()*10-5;
			const myvy = (Math.random()-0.5)*10;
			const c = (i<10)?"red":"black";
			const s = (i<10)?5:1;

			theModel.addFirefly(new Firefly(50,50,s,c,myvx,myvy))
		}
		theModel.net.x=0;
		theModel.net.y=0;
		theModel.gameStart = new Date();
		theModel.gameTime=0;
		theModel.score=0;
		theModel.running=false;

	}

	update(){
		const ffModel = this;
		const theDate = new Date();
		const theTime = theDate.getTime();
		const dt = theTime - this.lastTime; // in milliseconds
		this.lastTime = theTime;
		this.gameTime = (theDate - this.gameStart)/1000;
		//var fps = 1000/(dt);
		//console.log("fps="+fps);

		const theNet = this.net;

		_.each(this.fireflyList,
			   function(f){
				   f.update(dt/1000.0);
				   if (theNet.caught(f)) {
					   f.alive = false;
						 if (f.c=="red") {
							 ffModel.score = ffModel.score - 10;
							 (new Audio('sounds/bad.wav')).play();
						 }else {
							 ffModel.score = ffModel.score + 1;
							 (new Audio('sounds/good.wav')).play();
						 }
				   }

			   }
		   );

	  // next we filter out all of the dead fireflies
		// keeping only the alive ones on the board
		this.fireflyList = _.filter(this.fireflyList,
		 								function(f){return f.alive})

		// next we count the black and red fireflies
		// left on the board.
		let numblack=0;
		let numred=0;
		_.each(this.fireflyList,
			     function(f){
							if (f.c == "black") {
							  numblack = numblack+1}
							else {
								numred = numred+1;
							}
						});
		theModel.numblack = numblack;
		theModel.numred = numred;


		if (this.fireflyList.length==0 || this.numblack==0) {
			console.log("Game Over");
			this.running = false;
		}
	}



}

theModel = new FireflyModel();
