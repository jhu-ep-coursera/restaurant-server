describe('SignUpController', function() {
  'use strict';

  var $httpBackend;
  var ApiPath;
  var MenuService;
  var MyInfoService;
  var SignUpController;

  var menuItem = {
    "id": 193,
    "short_name": "L1",
    "name": "Orange Chicken",
    "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
    "price_small": null,
    "price_large": 9.75,
    "small_portion_name": null,
    "large_portion_name": null,
    "created_at": "2016-08-30T03:04:22.865Z",
    "updated_at": "2016-08-30T03:04:22.865Z",
    "category_short_name": "L",
    "image_present": true
  };


  beforeEach(function() {
    module('restaurant');

    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');

      var $controller = $injector.get('$controller');
      var MenuService = $injector.get('MenuService');
      var MyInfoService = $injector.get('MyInfoService');

      SignUpController = $controller('SignUpController', {
        MenuService: MenuService,
        MyInfoService: MyInfoService
      });

      $httpBackend.whenGET('src/public/public.html').respond('');
      $httpBackend.whenGET('src/public/home/home.html').respond('');
    });

  });

  it('should show error message if the item number is invalid', function() {
    expect(SignUpController.invalidFavorite).not.toBeDefined();
    var shortName = "L1";
    SignUpController.info = {
      'favorite': shortName
    }
    $httpBackend.expectGET(ApiPath + "/menu_items/" + shortName + ".json").respond(500, '');

    SignUpController.validateFavorite(shortName);

    $httpBackend.flush();

    expect(SignUpController.invalidFavorite).toBe(true);
  });

  it('should show error message if the item number is valid', function() {
    expect(SignUpController.invalidFavorite).not.toBeDefined();
    var shortName = "L1";
    SignUpController.info = {
      'favorite': shortName
    }
    $httpBackend.expectGET(ApiPath + "/menu_items/" + shortName + ".json").respond(menuItem);

    SignUpController.validateFavorite(shortName);

    $httpBackend.flush();

    expect(SignUpController.invalidFavorite).toBe(false);
  });

});
