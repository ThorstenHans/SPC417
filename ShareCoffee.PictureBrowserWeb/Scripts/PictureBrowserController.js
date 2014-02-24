window.PictureBrowser.controller('pictureController', ['$scope', '$timeout', 'pictureService', function ($scope, $timeout, pictureService) {
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
