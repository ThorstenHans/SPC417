var iconUrl = '/content/images/ei_small.png';
var chromeSettings = new ShareCoffee.ChromeSettings(iconUrl, 'Getting Started with ShareCoffee Part II', null,
    new ShareCoffee.SettingsLink('foo.html', 'Link 1 with QueryString', true),
    new ShareCoffee.SettingsLink('bar.html', 'Link 2', false));

var onChromeLoaded = function () {
  console.log("SharePoint Chrome has been loaded");
};

ShareCoffee.UI.loadAppChrome('sp-chrome', chromeSettings, onChromeLoaded);

ShareCoffee.Commons.loadAppWebUrlFrom = function () {
  return jQuery.ajax({ url: '/Home/AppWebUrl', type: 'GET', async: false }).responseJSON;
};


ShareCoffee.Commons.loadHostWebUrlFrom = function () {
  return jQuery.ajax({ url: '/Home/HostWebUrl', type: 'GET', async: false }).responseJSON;
};
 
$("#host-web-url").text(ShareCoffee.Commons.getHostWebUrl());
$("#app-web-url").text(ShareCoffee.Commons.getAppWebUrl());