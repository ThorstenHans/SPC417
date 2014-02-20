/// <reference path="ShareCoffee/ShareCoffee.js"/>
/// <reference path="ShareCoffee.UserProfiles/ShareCoffee.UserProfiles.js"/>
window.vCardApp = angular.module('vCardApp', []);
window.vCardApp.config([
    '$compileProvider',
    function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sip):/);
      
    }
]);

window.vCardApp.service('vCardService', ['$http', function ($http) {
  return {
    loadMyCard: function (onSuccess, onError) {
      
      


    }
  };
}]);




window.vCardApp.controller('vCardController', ['$scope','vCardService', function ($scope,vCardService) {
  $scope.mail = '';
  $scope.name = '';
  $scope.job = '';
  $scope.profilePicture = '';

  $scope.init = function () {
    var onCardLoaded = function (data) {
      $scope.name = data.d.DisplayName;
      $scope.profilePicture = data.d.PictureUrl;
      $scope.mail = data.d.Email;
      $scope.job = data.d.Title;
    };
    var onError = function (error) {
      console.log(error);
    };
    vCardService.loadMyCard(onCardLoaded, onError);
  };

  $scope.init();
}]);
