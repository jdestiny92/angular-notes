(function(){

'use strict';	

angular.module('ShoppingListApp', [])

.controller('ShoppingAddController', ShoppingAddController)
.controller('ShoppingShowController', ShoppingShowController)
.service('ShoppingService', ShoppingService);	

//Adding Logic Starts Here
ShoppingAddController.$inject = ['ShoppingService'];

function ShoppingAddController(ShoppingService){
	var add = this;
	add.amount = '';
	add.name = '';
	
	this.saveList = function(){
		ShoppingService.saveList(add.amount, add.name);
	};
}


//Displaying Logic Starts Here
ShoppingShowController.$inject = ['ShoppingService'];

function ShoppingShowController(ShoppingService){
	this.list = ShoppingService.list;
	
	this.remove = function(index){
		ShoppingService.remove(index);
	}
}


//The Service starts here
function ShoppingService(){

this.list = [];
var list = this.list;

this.saveList = function(amount, name){
	var item = {
		amount: amount,
		name: name
	};

	list.push(item);
};

this.remove = function(index){
	list.splice(index, 1);
}

};


})();