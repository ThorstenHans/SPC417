# CoffeeScript
ShareCoffeeTaskList.service 'taskListService', ['$http', ($http) ->
  {
    loadTasks: (onTasksLoaded, onError) ->
      # load tasks from SharePoint using REST
      properties = ShareCoffee.REST.build.read.for.angularJS
        url: "web/lists/GetByTitle('Tasks')/items?$Select=Id,Title,Status"

      $http(properties).success(onTasksLoaded).error(onError)
      
    addTask: (taskName, onTaskAdded, onError) ->
      # create new Task in SharePoint using REST
      newTask =
        '__metadata':
          'type' : 'SP.Data.TasksListItem'
        'Title': taskName
        'Status': "Not Started"

      properties = ShareCoffee.REST.build.create.for.angularJS
        url: "web/lists/GetByTitle('Tasks')/items"
        payload: newTask
        
      $http(properties).success(onTaskAdded).error(onError)
    

    toggleTask: (task, onTaskToggled, onError) ->
      #toggle task's status using REST 
      updateTask =
        '__metadata':
          'type': 'SP.Data.TasksListItem'
        'Status': task.Status
        'PercentComplete': task.PercentComplete
      properties = ShareCoffee.REST.build.update.for.angularJS
        url: "web/lists/GetByTitle('Tasks')/items/GetById(#{task.Id})"
        payload: updateTask

      $http(properties).success(onTaskToggled).error(onError)
  }
]

ShareCoffeeTaskList.service 'profileService', ['$http', ($http) ->
  {
    loadProperties: (onPropertiesLoaded, onError) ->
      properties = ShareCoffee.REST.build.read.for.angularJS
        url: "SP.UserProfiles.PeopleManager/GetMyProperties?$select=DisplayName,PictureUrl"
      $http(properties).success(onPropertiesLoaded).error(onError)
  }
]