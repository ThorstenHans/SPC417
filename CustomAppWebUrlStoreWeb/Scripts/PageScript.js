ShareCoffee.Commons.loadAppWebUrlFrom = function () {
  jQuery.ajax({ url: '/Home/AppWebUrl', type: 'GET' })
    .done(function (d) {
      jQuery("#app-web-url").text(d);
    })
    .fail(function (d) {
      console.log(d);
    });
};



 
ShareCoffee.Commons.getHostWebUrl();
ShareCoffee.Commons.getAppWebUrl();