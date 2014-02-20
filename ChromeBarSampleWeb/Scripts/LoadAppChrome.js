(function() {
  var appChromeSettings, iconUrl, onSuccess;



  iconUrl = "/Content/Images/ei_small.png";

  appChromeSettings = new ShareCoffee.ChromeSettings(iconUrl, "SP417 - ChromeBar Loader", "", new ShareCoffee.SettingsLink("http://flickr.com", "Flickr", true), new ShareCoffee.SettingsLink("http://instagram.com", "Instagram", true));

  onSuccess = function() {
    console.log("SharePoint App Chrome and CSS loaded");
  };

  ShareCoffee.UI.loadAppChrome("sharepoint-chrome", appChromeSettings, onSuccess);

}).call(this);
