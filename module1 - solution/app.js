(function(){
  'use strict'
  angular.module("LunchCheck", [])
  .controller("LunchCheckController", ['$scope', function($scope){
    $scope.info = "";
    $scope.meals = "";
    $scope.appState = true;
    $scope.checkMeals = function(){
      var meal = [];
      if($scope.meals == "")
      {
        $scope.info = "Please enter data first.";
      }
      else {
        meal = $scope.meals.split(",");
      }
    }
  }]);
})();
