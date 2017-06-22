(function(){'use strict';

angular.module('ShoppingListCheckOff',[])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
		
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var buyList = this;
		
		buyList.bought = function (index){
			ShoppingListCheckOffService.boughtItems(index);
		}
		
		buyList.isEmpty = function()
		{
			return ShoppingListCheckOffService.emptyBuy();
		}
		
		buyList.items = ShoppingListCheckOffService.showBuyItems();
	}
	
	
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var boughtList = this;
		
		boughtList.items = ShoppingListCheckOffService.showBoughtItems();
		
		boughtList.isEmpty = function()
		{
			return ShoppingListCheckOffService.emptyBought();
		}	
	}
	
	
	function ShoppingListCheckOffService(){
		var service = this;
		var toBuy = [
		{
			name : "Flour",
			quant : "1 bag"
		},
		{
			name : "Eggs",
			quant : "4"
		},
		{
			name : "Sugar",
			quant : "2 packets"
		},
		{
			name : "Butter",
			quant : "1 packet"
		},
		{
			name : "Baking powder",
			quant : "1 pack"
		},
		{
			name : "Baking soda",
			quant : "1 pack"
		},
		{
			name : "Vanilla essence",
			quant : "1 bottle"
		},
		{
			name : "Coco powder",
			quant : "1 pack"
		}
		];
		
		var alreadyBought = [];
		
		service.boughtItems = function(index){
			alreadyBought.push(toBuy[index]);
			toBuy.splice(index,1);
		}
		
		service.showBuyItems = function(){
			return toBuy;
		}
		
		service.showBoughtItems = function(){
			return alreadyBought;
		}
		
		service.emptyBuy = function(){
			if (toBuy.length === 0){
				return true;
			}
			else return false;
		}
		
		service.emptyBought = function(){
			if (alreadyBought.length === 0){
				return true;
			}
			else return false;
		}
		
	}

})();
