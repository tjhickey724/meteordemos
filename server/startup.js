

Meteor.methods({
	"updateTeams":function(){
		teams.forEach(function(s){
			//console.log("updating "+s.title);
			Teams.update({num:s.num},{$set:{title:s.title,teamname:s.teamname,url:s.url,img:s.img}});
		});
		members.forEach(function(s){
      //console.log(s.name);
			Members.update({name:s.name},{$set:{email:s.email.trim()}});
      //console.dir(Members.findOne({email:s.email}));
		})
	},

  "myReviews":function(team){
    return Teams.find({num:team});
  },

  "updateMembers": function(){
    Members.remove({});
    members.forEach(function(m){
      Members.insert(m);
    })
  },

	"updateParticipation": function(){
		Participation.remove({});
		participation.forEach(function(p){
			Participation.insert(p);
		})
	},

  "updateGrades": function(){
    Grades.remove({});
    // open a file and read in the grades
      var csv = Assets.getText("grades/cs164agrades.csv");
      var lines = csv.split('\n');
      console.log("lines length is "+lines.length);
      lines.forEach(function(line){
        console.log("processing line: "+line);
        var vals=line.split(',');
        var grades={};
        //first,last,idnum,inst,dept,email,
        var p=0;
        grades.first=vals[p++];
        grades.last=vals[p++];
        p++; p++; p++;
        grades.email=vals[p++];
        //hw9,hw10,hw3,hw4,hw5,hw6,hw7,hw8,hw1,hw2,
        grades.hw=[0,0,0,0,0,0,0,0,0,0,0];
        grades.hw[9]= vals[p++];
        grades.hw[10]= vals[p++];
        grades.hw[3]= vals[p++];
        grades.hw[4]= vals[p++];
        grades.hw[5]= vals[p++];
        grades.hw[6]= vals[p++];
        grades.hw[7]= vals[p++];
        grades.hw[8]= vals[p++];
        grades.hw[1]= vals[p++];
        grades.hw[2]= vals[p++];
        //participation,
        grades.part = vals[p++];
        //q3m,q3mh,q3mm,q2mm,q1mm,q1mmh,q2mmh,q3mmh,
        grades.q={};
        grades.q.q3m = vals[p++];
        grades.q.q3mh = vals[p++];
        grades.q.q3mm = vals[p++];
        grades.q.q2mm = vals[p++];
        grades.q.q1.mm = vals[p++];
        grades.q.q1mmh = vals[p++];
        grades.q.q2mmh = vals[p++];
        grades.q.q3mmh = vals[p++];
        //q1,q1h,q1m,q1mh,q2,q2h,q2m,q2mh,q3,q3h,
        grades.q.q1 = vals[p++];
        grades.q.q1h = vals[p++];
        grades.q.q1m = vals[p++];
        grades.q.q1mh = vals[p++];
        grades.q.q2 = vals[p++];
        grades.q.q2h = vals[p++];
        grades.q.q2m = vals[p++];
        grades.q.q2mh = vals[p++];
        grades.q.q3 = vals[p++];
        grades.q.q3h = vals[p++];
				grades.q.q1f=0;
				grades.q.q2f=0;
				grades.q.q3f=0;

        // q1f,q2f,q3f,
        p++; p++; p++;
        //fp,downtime
        grades.fp=vals[p++];
        Grades.insert(grades);
        console.dir(grades);
      })
},

  "updateUsers":function(){
      var users = Meteor.users.find().fetch();
      users.forEach(function(user){
        var uemail="";
        if (user.services && user.services.google){
          uemail= user.services.google.email;
        } else if (user.emails) {
          uemail= user.emails[0].address;
        } else {
          uemail= "no-email";
        }
        UserEmails.update(
          {uid:user._id},
          {email:uemail},
          {upsert:true}
        );
      })
  },
})

Meteor.publish("teams",function(){return Teams.find();})
Meteor.publish("members",function(){return Members.find();})
Meteor.publish("reviews",function(){ return Reviews.find();})
Meteor.publish("grades",function(){ return Grades.find();})
//  return Reviews.find({reviewer:this.userId});})

function emailOfUser(user){
  if (user && user.services && user.services.google){
    return user.services.google.email;
  } else if (user && user.emails) {
    return user.emails[0].address;
  } else {
    return "no-email";
  }
}
eu = emailOfUser;

Meteor.publish("myreviews",function(){
  //console.log("publishing my reviews for "+this.userId);
  var user = Meteor.users.findOne({_id:this.userId});
  var email = emailOfUser(user);
  //console.log("email= "+email);
  if (email=="tjhickey724@gmail.com"){
    return Reviews.find();
  }
  var member= Members.findOne({email:email});
  if (member){
    //console.dir(member);
    teamNum = member.team;
  } else {
    teamNum = 0;
  }
  //console.dir(user);
  //console.log("Team number for "+email+" is "+teamNum);
  return Reviews.find(
    {$or:[{team:teamNum},{reviewer:this.userId}]},
    {fields:{email:0}}
  );
})

Meteor.publish("mygrades",function(){
  //console.log("publishing my reviews for "+this.userId);
  var user = Meteor.users.findOne({_id:this.userId});
  var email = emailOfUser(user);
  //console.log("email= "+email);
  if (email=="tjhickey724@gmail.com"){
    return Grades.find();
  }
  //console.dir(user);
  //console.log("Team number for "+email+" is "+teamNum);
  return Grades.find(
		{email:email}
  );
})

Meteor.publish("myparticipation",function(){
  //console.log("publishing my reviews for "+this.userId);
  var user = Meteor.users.findOne({_id:this.userId});
  var email = emailOfUser(user);
  //console.log("email= "+email);
  if (email=="tjhickey724@gmail.com"){
		console.log("publishing all Participation");
    return Participation.find();
  }
  //console.dir(user);
  //console.log("Team number for "+email+" is "+teamNum);
  return Participation.find(
		{email:email}
  );
})





Meteor.startup(function(){
  if (Teams.find().count()==0){
		//console.log("loading in teamdata");
		teams.forEach(function(s){Teams.insert(s)});

		members.forEach(function(s){Members.insert(s)});
	}


// this is very insecure, but helpful for development
	Meteor.publish('userList', function (){
  return Meteor.users.find({});
});

});
