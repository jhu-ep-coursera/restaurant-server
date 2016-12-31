(function() {
  'use strict';

  angular
    .module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['SessionStorage', 'ApiPath'];

  function MyInfoController(SessionStorage, ApiPath) {
    var myInfoCtrl = this;
    
    myInfoCtrl.basePath = ApiPath;
    myInfoCtrl.user = SessionStorage.getObject('userinfo', '{}');
    myInfoCtrl.notSignedUp = angular.equals({}, myInfoCtrl.user);
  }
})();
