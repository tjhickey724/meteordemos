Template.bills.helpers({
  pokedex: function(){
    return Pokedex.find({},{sort:{ename:1}});
  },
  bills:function(){
  	return Bills.find();
  }

})
