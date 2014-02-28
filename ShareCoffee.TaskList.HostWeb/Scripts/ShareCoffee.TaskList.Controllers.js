// Generated by CoffeeScript 1.7.1
(function() {
  ShareCoffeeTaskList.controller('taskListController', [
    '$scope', 'taskListService', function($scope, taskListService) {
      $scope.tasks = [];
      $scope.newTask = 'Add another task ...';
      $scope.reverse = true;
      $scope.filterTerm = '';
      $scope.init = function() {
        var onTasksLoaded;
        onTasksLoaded = function(data) {
          return $scope.tasks = data.d.results;
        };
        return taskListService.loadTasks(onTasksLoaded);
      };
      $scope.addTask = function() {
        var onTaskAdded;
        onTaskAdded = function(data) {
          $scope.tasks.push(data.d);
          return $scope.newTask = 'Add another task...';
        };
        return taskListService.addTask($scope.newTask, onTaskAdded);
      };
      $scope.toggle = function(task) {
        var onError, onToggled;
        if (task.Status === 'Completed') {
          task.Status = 'Not Started';
          task.PercentComplete = 0;
        } else {
          task.Status = 'Completed';
          task.PercentComplete = 1;
        }
        onToggled = function(task) {
          return console.log("upadted " + (JSON.stringify(task)));
        };
        onError = function(error) {
          return console.log(error);
        };
        return taskListService.toggleTask(task, onToggled, onError);
      };
      return $scope.init();
    }
  ]);

  ShareCoffeeTaskList.controller('profileController', [
    '$scope', 'profileService', function($scope, profileService) {
      $scope.userName = "";
      $scope.userPicture = "";
      $scope.init = function() {
        var onProfileLoaded;
        onProfileLoaded = function(data) {
          $scope.userName = data.d.DisplayName;
          return $scope.userPicture = data.d.PictureUrl;
        };
        return profileService.loadProperties(onProfileLoaded);
      };
      return $scope.init();
    }
  ]);

}).call(this);
