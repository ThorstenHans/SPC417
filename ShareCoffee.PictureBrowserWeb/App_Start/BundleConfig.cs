using System.Web;
using System.Web.Optimization;

namespace ShareCoffee.PictureBrowserWeb
{
  public class BundleConfig
  {
    // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
    public static void RegisterBundles(BundleCollection bundles)
    {
      bundles.Add(new ScriptBundle("~/bundles/jquery")
        .Include("~/Scripts/jquery-{version}.js"));

      bundles.Add(new ScriptBundle("~/bundles/sharecoffee")
        .Include("~/Scripts/ShareCoffee/ShareCoffee.min.js"));
       

      bundles.Add(new ScriptBundle("~/bundles/sample")
        .Include("~/Scripts/ChromeControl.js") 
        .Include("~/Scripts/flexslider.js")
        .Include("~/Scripts/PictureBrowserApp.js")
        .Include("~/Scripts/PictureBrowserService.js")
        .Include("~/Scripts/PictureBrowserController.js"));

      bundles.Add(new ScriptBundle("~/bundles/modernizr")
        .Include("~/Scripts/modernizr-*"));

      bundles.Add(new ScriptBundle("~/bundles/bootstrap")
        .Include("~/Scripts/bootstrap.js","~/Scripts/respond.js"));

      bundles.Add(new StyleBundle("~/Content/css")
        .Include("~/Content/bootstrap.css","~/Content/site.css"));
    }
  }
}
