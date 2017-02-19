(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = [];
function MyInfoService() {
  var service = this;

  service.setInfo = function (info) {
    service.info = info;
  };

  service.getInfo = function() {
    return service.info;
  }
};

})();
