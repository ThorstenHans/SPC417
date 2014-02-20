/// <reference path="ShareCoffee/ShareCoffee.js"/>
$(document).ready(function () {
  $("#app-web-url").text(getAppWebUrl());
  $("#host-web-url").text(getHostWebUrl());

  $("#add-notification").click(addNotification);
  $("#add-status").click(showStatus);
  $("#set-status-color").click(setStatusColor);

});

var currentStatusId = -1;



function preventPageReload(e) {
  e.preventDefault();
  return false;
}