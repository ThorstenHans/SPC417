var iconUrl = '/Content/Images/ei_small.png';
var appChromeSettings = new ShareCoffee.ChromeSettings(iconUrl, 'Picture Browser', '',
    new ShareCoffee.SettingsLink('http://flickr.com', 'Flickr', true),
    new ShareCoffee.SettingsLink('http://instagram.com', 'Instagram', true));
var onSuccess = function () {
  console.log('SharePoint App Chrome and CSS loaded');
};
ShareCoffee.UI.loadAppChrome('sharepoint-chrome', appChromeSettings, onSuccess);