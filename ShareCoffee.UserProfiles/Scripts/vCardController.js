window.vCardApp.controller('vCardController', ['$scope', 'vCardService', function ($scope, vCardService) {
  $scope.mail = '';
  $scope.name = '';
  $scope.job = '';
  $scope.profilePicture = '';
  $scope.birthday = '';
  $scope.info = '';
  $scope.phone = '';

  $scope.init = function () {
    var onCardLoaded = function (data) {
      var getProfileProperty = function(array, property) {
        for (var i = 0; i < array.length; i++) {
          if (array[i].Key == property) {
            return array[i].Value;
          }
        }
        return '';
      };
      $scope.name = data.d.DisplayName;
      $scope.profilePicture = data.d.PictureUrl;
      $scope.mail = data.d.Email;
      $scope.job = data.d.Title;
      $scope.birthday = getProfileProperty(data.d.UserProfileProperties.results, 'SPS-Birthday').substr(0, 4);
      $scope.info = getProfileProperty(data.d.UserProfileProperties.results, 'AboutMe');
      $scope.phone = getProfileProperty(data.d.UserProfileProperties.results, 'CellPhone');
    };
    var onError = function (error) {
      console.log(error);
    };
    vCardService.loadMyCard(onCardLoaded, onError);
  };

  $scope.init();
}]);