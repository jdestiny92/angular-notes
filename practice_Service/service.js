function ShoppingService(){

var list = [];

function saveList(amount, name){
	var item = {
		amount: amount,
		name: name
	};

	list.push(item);
};

};