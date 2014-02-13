using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShareCoffee.PictureBrowserWeb.Extensions
{
  public static class UrlExtensions
  {
    public static string ToQueryString(NameValueCollection nvc)
    {
        var array = (from key in nvc.AllKeys
            from value in nvc.GetValues(key)
            select string.Format("{0}={1}", HttpUtility.UrlEncode(key), HttpUtility.UrlEncode(value)))
            .ToArray();
        return "?" + string.Join("&", array);
    }
    public static string Action(this UrlHelper instance, String controller, String action, bool includeQueryString)
    {
      var url = instance.Action(action, controller);
      if (includeQueryString)
      { 
        return String.Format("{0}{1}", url, ToQueryString(instance.RequestContext.HttpContext.Request.QueryString));
      }
      return url;
      
      
    }
  }
}