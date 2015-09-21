
app.controller("SampleAppCtrl", function ($scope, $routeParams, $location) {
	$scope.items = [{ name: "Item_1", value: "10", price: 10, order: 0, info: 'All info about Item_1' },
				{ name: "Item_2", value: "10", price: 15, order: 0, info: 'All info about Item_2' },
				{ name: "Item_3", value: "10", price: 18, order: 0, info: 'All info about Item_3' },
				{ name: "Phon34", value: "10", price: 25, order: 0, info: 'All info about Phon34' },
				{ name: "Glass", value: "10", price: 34, order: 0, info: 'All info about Glass' },
				{ name: "Item", value: "10", price: 1, order: 0, info: 'All info about Item' },
				{ name: "Bin", value: "10", price: 11, order: 0, info: 'All info about Bin' }];
	$scope.amount = {};
	$scope.sum = 0;
	$scope.sumMony = 0;
	$scope.templatePath = 'templates/main.html';
	$scope.sortField = undefined;
	$scope.reverse = false;
	
    $scope.opt = function (item) {
		var arr = [];
		
		for(var i = 1; i <= item.value; i++) {
			arr.push(i);
		}
		
		return arr;
	};	
	
	$scope.showAll = function (item) {
		item.value >= 1 ? item.value -= item.order : item.value = 0;
		item.order !== 0 ? order() : item.order;
		item.order = 0;

		function order () {
			if($scope.amount[item.name]){
			    $scope.amount[item.name] = $scope.amount[item.name] + item.order;	
			} else {
				$scope.amount[item.name] = item.order;
			}  
			
			$scope.sumMony += (item.order * item.price);
			
			var count = 0;
		
			angular.forEach($scope.amount, function(value, key) {
			    count += value;
			});
			
			$scope.sum = count;
			count = 0;
		};

	};

	$scope.dell = function (value, key) {
		delete $scope.amount[key];

		for(var i = 0; i <= $scope.items.length; i++) {
			if($scope.items[i].name === key) {
				$scope.items[i].value += value;
				$scope.sum -= value;
				$scope.sumMony -= ($scope.items[i].price * value); 
				console.log($scope.sumMony);
			}
		}
	}
	
	
	$scope.showMore = function (item) {
		$('#myModal').modal({
		  keyboard: true
		})
		$scope.showMoreItem = item

	}
	
	$scope.sort = function (fildName) {
		if($scope.sortField === fildName) {
			$scope.reverse = !$scope.reverse;
		} else {
			$scope.sortField = fildName
			$scope.reverse = false;
		}
	};
	
	$scope.isSortUp = function (fildName) {
		return $scope.sortField === fildName && !$scope.reverse;
	};
	
	$scope.isSortDown = function (fildName) {
		return $scope.sortField === fildName && $scope.reverse;
	};

});