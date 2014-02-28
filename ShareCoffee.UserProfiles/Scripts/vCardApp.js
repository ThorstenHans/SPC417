window.vCardApp = angular.module('vCardApp', ['ngSanitize']);
window.vCardApp.config([
    '$compileProvider',
    function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sip):/);

    }
]);