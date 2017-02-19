(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'info'];
function MyInfoController(MenuService, info) {
  var $ctrl = this;

  if (info) {
    $ctrl.info = info;
    MenuService.getMenuItem(info.favorite)
      .then(function(response) {
        $ctrl.menuItem = response;
      })
      .catch(function(response) {
        console.log(response);
      });
  }
};

})();
