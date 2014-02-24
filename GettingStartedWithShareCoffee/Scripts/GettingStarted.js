/// <reference path="ShareCoffee/ShareCoffee.js"/>
$(document).ready(function () {
  $("#app-web-url").text(getAppWebUrl());
  $("#host-web-url").text(getHostWebUrl());

  $("#add-notification").click(addNotification);
  $("#add-status").click(showStatus);
  $("#set-status-color").click(setStatusColor);

});

var currentStatusId = -1;

function getHostWebUrl() {
  return ShareCoffee.Commons.getHostWebUrl();
}

function getAppWebUrl() {
  return ShareCoffee.Commons.getAppWebUrl();
}


function addNotification(e) {
  ShareCoffee.UI.showNotification("This notification has been created with ShareCoffee");
  preventPageReload(e);
}

function showStatus(e) {
  currentStatusId = ShareCoffee.UI.showStatus("Status Title", "<b>ShareCoffee</b> status check <a href='foo'>this</a>");
  preventPageReload(e);
}

function setStatusColor(e) {
  ShareCoffee.UI.setStatusColor(currentStatusId, 'yellow');
  preventPageReload(e);
}

function preventPageReload(e) {
  e.preventDefault();
  return false;
}