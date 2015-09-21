
app.controller("SampleAppCtrl", function ($scope, $routeParams, $location) {
	$scope.items = [{ name: "Item_1", value: "10", order: 0 },
				{ name: "Item_2", value: "10", order: 0 },
				{ name: "Item_3", value: "10", order: 0 }];
	$scope.amount = {};
	$scope.sum = 0;
	//$scope.query;
	//$scope.message = true;
	$scope.templatePath = 'templates/main.html';
	//$scope.all = false;
	//$scope.isDisabled;
	
    $scope.opt = function (item) {
		var arr = [];
		
		for(var i = 1; i <= item.value; i++) {
			arr.push(i);
		}
		
		return arr;
	};	
	
	$scope.showAll = function (item) {
		//isDisabled = true;

		item.value >= 1 ? item.value -= item.order : item.value = 0;
		item.order !== 0 ? order() : item.order;
		item.order = 0;

		function order () {
			if($scope.amount[item.name]){
			    $scope.amount[item.name] = $scope.amount[item.name] + item.order;	
			} else {
				$scope.amount[item.name] = item.order;
			}  
			
			var count = 0;
		
			angular.forEach($scope.amount, function(value, key) {
			    count += value;
			});
			console.log($scope.amount)
			
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
			}
		}
	}
	
	
	$scope.showMore = function (item) {
		$('#myModal').modal({
		  keyboard: true
		})
		$scope.showMoreItem = item

	}

});