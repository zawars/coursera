(function() {
  angular.module('ShoppingListCheckOff')
  .service('ShoppingListCheckOffService', [function () {
    this.toBuyItems = [
      {
        name: "cookies",
        quantity: 10
      },
      {
        name: "chocolates",
        quantity: 20
      },
      {
        name: "bread",
        quantity: 4
      },
      {
        name: "milk",
        quantity: 5
      },
      {
        name: "cheese",
        quantity: 3
      }
    ];
    this.boughtItems = [];
  }])
})();
