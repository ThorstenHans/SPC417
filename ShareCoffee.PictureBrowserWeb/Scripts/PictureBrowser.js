/// <reference path="ShareCoffee/ShareCoffee.js" />

window.PictureBrowser = angular.module('PictureBrowser', ['angular-flexslider']);


window.PictureBrowser.service('pictureService', ['$http', function ($http) {
  return {
    init: function (callback) {
      var onErrorLoadingCrossDomainLibrary = function () {
        console.log("Error while loading CrossDomain Libraries for SharePoint");
      };
      ShareCoffee.CrossDomain.loadCrossDomainLibrary(callback, onErrorLoadingCrossDomainLibrary);
    },
    loadPictures: function (onPicturesLoaded, onErrorLoadingPictures) {
       
        var executor = new SP.RequestExecutor(ShareCoffee.Commons.getAppWebUrl());
        executor.executeAsync(ShareCoffee.CrossDomain.build.read.for.SPCrossDomainLib({
          url: "web/lists/getByTitle('Pictures')/items?$select=EncodedAbsUrl",
          onSuccess: onPicturesLoaded,
          onError: onErrorLoadingPictures
        }));

      }
    }
}]);
window.PictureBrowser.controller('pictureController', ['$scope','$timeout', 'pictureService', function ($scope, $timeout, pictureService) {
  $scope.pics = [];

  $scope.init = function () {
    var onPicturesLoaded = function (data) {
      var jsonObject = JSON.parse(data.body);
      $timeout(function () {
        for (var i = 0; i < jsonObject.d.results.length; i++) {
          $scope.pics.push(jsonObject.d.results[i].EncodedAbsUrl);
        }
      });

      
    };
    var onError = function (error) {
      console.log(error);
    };
    pictureService.init(function () {
      pictureService.loadPictures(onPicturesLoaded, onError);
    });
  };

  $scope.init();
}]);
