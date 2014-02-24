/// <reference path="ShareCoffee/ShareCoffee.js"/>
/// <reference path="ShareCoffee.UserProfiles/ShareCoffee.UserProfiles.js"/>


window.vCardApp.service('vCardService', ['$http', function ($http) {
  return {
    loadMyCard: function (onSuccess, onError) {
      $http(ShareCoffee.CrossDomain.build.read.for.SPCrossDomainLib({ url: ShareCoffee.Url.GetMyProperties }))
         .success(onSuccess)
         .error(onError);
    }
  };
}]);
