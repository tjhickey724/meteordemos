Meteor.startup(function(){
	if (Pokedex.find().count()==0){
		console.log("Importing Pokedex to db")

			 var data = JSON.parse(Assets.getText(
				 "Pokemon-DB-master/pokedex.json"));
			 console.log("data length = "+data.length);

			 data.forEach(function (item, index, array) {
				 //console.log(index+" "+JSON.stringify(item));
					 Pokedex.insert(item);
			 })
			 console.log("Pokedex imported");
	};
	if (Bills.find().count()==0){
		var data = JSON.parse(Assets.getText("bills.json"));
		data.forEach(function(item,index,array) {
			Bills.insert(item);
		})
	}

// this is very insecure, but helpful for development
	Meteor.publish('userList', function (){
  return Meteor.users.find({});
});

});
