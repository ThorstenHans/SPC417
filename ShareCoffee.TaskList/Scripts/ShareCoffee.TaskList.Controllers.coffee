# CoffeeScript
ShareCoffeeTaskList.controller 'taskListController', ['$scope','taskListService', ($scope, taskListService) ->
  $scope.tasks = []
  $scope.newTask = 'Add another task ...'
  $scope.reverse = true;
  $scope.filterTerm = '';
  $scope.init = () ->
    onTasksLoaded = (data) ->
      $scope.tasks = data.d.results
    taskListService.loadTasks onTasksLoaded
  
  $scope.addTask = () ->
    onTaskAdded = (data) ->
      $scope.tasks.push data.d
      $scope.newTask = 'Add another task...'

    taskListService.addTask $scope.newTask, onTaskAdded

  $scope.toggle = (task) ->
    onTaskToggled = (data)->
      console.log data
    onError = (data)->
      console.log data
    if task.Status is 'Completed'
      task.Status = 'Not Started'
      task.PercentComplete = 0
    else
      task.Status = 'Completed'
      task.PercentComplete = 1
    taskListService.toggleTask task, onTaskToggled, onError

  $scope.init()
]

ShareCoffeeTaskList.controller 'profileController', ['$scope', 'profileService', ($scope, profileService) ->
  $scope.userName = ""
  $scope.userPicture = ""

  $scope.init = () ->
    onProfileLoaded = (data) ->
      $scope.userName = data.d.DisplayName
      $scope.userPicture = data.d.PictureUrl
    profileService.loadProperties onProfileLoaded
  
  $scope.init()
]