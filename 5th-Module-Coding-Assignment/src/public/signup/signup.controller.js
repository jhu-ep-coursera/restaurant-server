(function() {
  'use strict';

  angular
    .module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope', 'MenuService', 'SessionStorage'];

  function SignUpController($scope, MenuService, SessionStorage) {
    var signUpCtrl = this;

    signUpCtrl.user = {};
    signUpCtrl.userInfoSaved = false;
    signUpCtrl.validMenuNumber = false;

    signUpCtrl.checkMenuNumber = function() {
      var shortName = signUpCtrl.user.menuNumber ? signUpCtrl.user.menuNumber.toUpperCase() : '';
      MenuService.getMenuItemsByShortName(shortName)
        .then(function(response) {
          signUpCtrl.user.menuItem = response;
          signUpCtrl.validMenuNumber = true;
        })
        .catch(function(response) {
          signUpCtrl.validMenuNumber = false;
        });
    }

    signUpCtrl.submitForm = function() {
      if ($scope.signUpForm.$valid && signUpCtrl.validMenuNumber) {
        delete signUpCtrl.user.menuNumber;
        SessionStorage.storeObject('userinfo', signUpCtrl.user);
        signUpCtrl.userInfoSaved = true;
        $scope.signUpForm.$setPristine();
        $scope.signUpForm.$setUntouched();
        signUpCtrl.user = {};
      } else {
        if (signUpCtrl.userInfoSaved) {
          signUpCtrl.userInfoSaved = false;
        }
      }
    }
  }
})();
