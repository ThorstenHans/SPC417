using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CustomAppWebUrlStoreWeb.Controllers
{
  public class HomeController : Controller
  {
    public ActionResult Index()
    {
      return View();
    }


    public JsonResult AppWebUrl()
    {
      return new JsonResult
      {
        Data = "http://mysharepoint.appweb.url/",
        JsonRequestBehavior = JsonRequestBehavior.AllowGet
      };
    }

    public JsonResult HostWebUrl()
    {
      return new JsonResult
      {
        Data = "http://mysharepoint.hostweb.url/",
        JsonRequestBehavior = JsonRequestBehavior.AllowGet
      };
    }


    public ActionResult Contact()
    {
      ViewBag.Message = "Your contact page.";

      return View();
    }
  }
}