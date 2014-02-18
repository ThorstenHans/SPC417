(function() {


  ShareCoffeeTaskList.service('taskListService', [
    '$http', function($http) {
      return {
        loadTasks: function(onTasksLoaded, onError) {
          var properties;
          properties = ShareCoffee.REST.build.read["for"].angularJS({
            url: "web/lists/GetByTitle('Tasks')/items?$Select=Title,Status"
          });
          return $http(properties).success(onTasksLoaded).error(onError);
        },
        addTask: function(taskName, onTaskAdded, onError) {
          var newTask, properties;
          newTask = {
            '__metadata': {
              'type': 'SP.Data.TasksListItem'
            },
            'Title': taskName,
            'Status': "Not Started"
          };
          properties = ShareCoffee.REST.build.create["for"].angularJS({
            url: "web/lists/GetByTitle('Tasks')/items",
            payload: newTask
          });
          return $http(properties).success(onTaskAdded).error(onError);
        },
        toggleTask: function(task, onTaskToggled, onError) {
          var properties, updateTask;
          updateTask = {
            '__metadata': {
              'type': 'SP.Data.TasksListItem'
            },
            'Status': task.Status,
            'PercentComplete': task.PercentComplete
          };
          properties = ShareCoffee.REST.build.update["for"].angularJS({
            url: "web/lists/GetByTitle('Tasks')/items/GetById(" + task.Id + ")",
            payload: updateTask
          });
          return $http(properties).success(onTaskToggled).error(onError);
        }
      };
    }
  ]);

  ShareCoffeeTaskList.service('profileService', [
    '$http', function($http) {
      return {
        loadProperties: function(onPropertiesLoaded, onError) {
          var properties;
          properties = ShareCoffee.REST.build.read["for"].angularJS({
            url: "SP.UserProfiles.PeopleManager/GetMyProperties?$select=DisplayName,PictureUrl"
          });
          return $http(properties).success(onPropertiesLoaded).error(onError);
        }
      };
    }
  ]);

}).call(this);
