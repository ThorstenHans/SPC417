$(document).ready(function () {

  $("#add-notification").click(addNotification);
  $("#add-status").click(showStatus);
  $("#set-status-color").click(setStatusColor);

  $("#app-web-url").text(getAppWebUrl());
  $("#host-web-url").text(getHostWebUrl());

});

var currentStatusId = -1;


function getHostWebUrl() { 
  return ShareCoffee.Commons.getHostWebUrl();
}

function getAppWebUrl() {
  //ShareCoffee.Commons.loadAppWebUrlFrom = function () {
    // load App Web Url from custom store...
  //  return "foo:bar";
  //};
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