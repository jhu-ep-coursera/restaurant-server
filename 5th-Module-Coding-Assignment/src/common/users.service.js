(function() {
  "use strict";

  angular.module("common")
    .service("UsersService", UsersService);

//  UsersService.$inject = [];
  function UsersService() {
    var service = this;
    //Using a singular object, but this should be a list
    var user;

    //Only handling one user, but this should be an add method
    service.setUser = function(newUser) {
      console.log("Setting user...");
      user = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
        favoriteDish: newUser.favoriteDish,
        favoriteMenuItem: newUser.favoriteMenuItem
      };
      console.log("Set user!");
    };

    //Only handling one user, but this should be an get method
    // with index as argument
    service.getUser = function() {
      return user;
    }
  }
})();
