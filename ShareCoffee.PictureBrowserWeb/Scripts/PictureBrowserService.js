/// <reference path="ShareCoffee/ShareCoffee.js" />
window.PictureBrowser.service('pictureService', ['$http', function ($http) {
  return {

    init: function (callback) {
      // callback will be invoked once the lib is loaded...
      var onErrorLoadingCrossDomainLibrary = function () {
        console.log("Error while loading CrossDomain Libraries for SharePoint");
      };

      ShareCoffee.CrossDomain.loadCrossDomainLibrary(callback, onErrorLoadingCrossDomainLibrary);
    },

    loadPictures: function (onPicturesLoaded, onErrorLoadingPictures) {
      // load Pictures from SharePoint using CrossDomain support from ShareCoffee
      
      var executor = new SP.RequestExecutor(ShareCoffee.Commons.getAppWebUrl());

      executor.executeAsync(ShareCoffee.CrossDomain.build.read.for.SPCrossDomainLib({
        url: "web/lists/getByTitle('Pictures')/items?$select=EncodedAbsUrl",
        onSuccess: onPicturesLoaded,
        onError: onErrorLoadingPictures
      }));

    }
  }
}]);
