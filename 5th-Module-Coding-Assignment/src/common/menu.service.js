(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
//    var config = {};
//    if (shortName) {
//      config.params = { category: shortName };
//    }
    console.log("Request: ", ApiPath + '/menu_items/' + shortName.toUpperCase() + '.json');
    return $http.get(ApiPath + '/menu_items/' + shortName.toUpperCase() + '.json').then(function (response) {
      return response.data;
    });
  }
}
})();
