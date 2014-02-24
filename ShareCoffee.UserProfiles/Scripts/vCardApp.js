window.vCardApp = angular.module('vCardApp', []);
window.vCardApp.config([
    '$compileProvider',
    function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sip):/);

    }
]);