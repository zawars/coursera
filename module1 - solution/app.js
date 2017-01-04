(function() {
    'use strict'
    angular.module("LunchCheck", [])
        .controller("LunchCheckController", ['$scope', function($scope) {
            $scope.info = "";
            $scope.meals = "";
            $scope.appState = true;
            $scope.comment  = "";
            var commentFlag = false;

            $scope.checkMeals = function() {
                var meal = [];
                if ($scope.meals == "") {
                    $scope.col = {
                        "color": "red",
                        "font-size": "25px"
                    };
                    $scope.mealInput = {
                      "border-color": "red",
                      "border-style": "solid",
                      "border-width": "3px"
                    };
                    $scope.info = "Please enter data first.";
                } else {
                    meal = $scope.meals.split(",");
                    for(var i=0; i<meal.length; i++){
                      if(meal[i] == ""){
                        meal.splice(i);
                        this.commentFlag = true;
                      }
                    }
                    if (meal.length > 3) {
                        $scope.col = {
                            "color": "green",
                            "font-size": "25px"
                        };
                        $scope.mealInput = {
                          "border-color": "green",
                          "border-style": "solid",
                          "border-width": "4px"
                        };
                        $scope.info = "Too Much!";
                        if(this.commentFlag == true){
                          $scope.comment = "You do NOT consider an empty item, i.e.`, ,`";
                        }
                    } else {
                        $scope.col = {
                            "color": "green",
                            "font-size": "25px"
                        };
                        $scope.mealInput = {
                          "border-color": "green",
                          "border-style": "solid",
                          "border-width": "4px"
                        };
                        $scope.info = "Enjoy!";
                        if(this.commentFlag == true){
                          $scope.comment = "You do NOT consider an empty item, i.e. , ,";
                        }
                    }
                }
            }
        }]);
})();
