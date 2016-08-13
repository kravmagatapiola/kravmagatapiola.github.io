using System.Web.Optimization;

namespace KravMagaTapiola
{
    public static class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery")
                .Include(
                "~/Scripts/jquery-{version}.js")
                .Include(
                "~/Scripts/modernizr-*"));
            
            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/jquery.unobtrusive*",
                "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                "~/Scripts/knockout-{version}.js",
                "~/Scripts/knockout.validation.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/sammy-{version}.js",
                "~/Scripts/app/common.js",
                "~/Scripts/app/app.datamodel.js",
                "~/Scripts/app/app.viewmodel.js",
                "~/Scripts/app/home.viewmodel.js",
                "~/Scripts/app/_run.js"));

            bundles.Add(new ScriptBundle("~/Scripts/site")
                .Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/respond.js")
                .Include(
                "~/Scripts/plugins/isotope/isotope.pkgd.min.js",
                "~/Scripts/plugins/jquery.backstretch.min.js", 
                "~/Scripts/plugins/jquery.appear.js", 
                "~/Scripts/plugins/simplePlayer.js", 
                "~/Scripts/plugins/googlecal.js",
                "~/Scripts/plugins/light-gallery/lightGallery.js",
                "~/Scripts/template.js", 
                "~/Scripts/custom.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                 "~/Content/bootstrap.css",
                 "~/Content/font-awesome.css",
                 "~/Content/animate.css",
                 "~/Content/animations.css",
                 "~/Content/plugins/light-gallery/css/lightGallery.css",
                 "~/Content/Site.css"));
        }
    }
}
