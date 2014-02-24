/*
ShareCoffee.Search (c) 2014 Thorsten Hans
| dotnet-rocks.com | https://github.com/ThorstenHans/ShareCoffee.Search/ | under MIT License |
*/


(function() {
  var root;

  root = typeof global !== "undefined" && global !== null ? global : window;

  if ((root.ShareCoffee == null) || (root.ShareCoffee.REST == null)) {
    throw new Error("LoadError");
  }

  root.ShareCoffee.MySearch = {};

}).call(this);

/*
//@ sourceMappingURL=ShareCoffee.MySearch.js.map
*/