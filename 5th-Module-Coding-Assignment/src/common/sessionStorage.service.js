(function () {
  'use strict';

  angular
    .module('common')
    .service('SessionStorage', SessionStorage);

  SessionStorage.$inject = ['$window'];

  function SessionStorage($window) {
    var service = this;

    service.store = function(key, value) {
      $window.sessionStorage[key] = value;
    };

    service.get = function(key, defaultValue) {
      return $window.sessionStorage[key] || defaultValue;
    };

    service.remove = function(key) {
      $window.sessionStorage.removeItem(key);
    };

    service.storeObject = function(key, value) {
      $window.sessionStorage[key] = JSON.stringify(value);
    };

    service.getObject = function (key, defaultValue) {
      return JSON.parse($window.sessionStorage[key] || defaultValue);
    };
  }
})();
