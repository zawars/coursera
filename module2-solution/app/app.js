(function(){
  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService){
      $scope.toBuy = ShoppingListCheckOffService.toBuyItems;
      $scope.bought = function (index) {
        ShoppingListCheckOffService.boughtItems.push($scope.toBuy[index]);
        $scope.toBuy.splice(index, 1);
      };
    }])
    .controller("AlreadyBoughtController", ['$scope', 'ShoppingListCheckOffService', function ($scope, ShoppingListCheckOffService) {
      $scope.alreadyBought = ShoppingListCheckOffService.boughtItems;
    }]);
})();
