﻿using System.Web.Optimization;

namespace KravMagaTapiola
{
    public static class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.UseCdn = true;
            BundleTable.EnableOptimizations = true; //force optimization while debugging
            var jquery = new ScriptBundle("~/bundles/jquery", "//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js")
                .Include("~/Scripts/jquery-{version}.js");
            jquery.CdnFallbackExpression = "window.jQuery";
            bundles.Add(jquery);

            var modernizr = new ScriptBundle("~/bundles/modernizr", "//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.3/modernizr.min.js")
                .Include("~/Scripts/modernizr-{version}.js");
            modernizr.CdnFallbackExpression = "window.Modernizr";
            bundles.Add(modernizr);

            var ytPlayer = new ScriptBundle("~/bundles/ytPlayer", "//cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.1.5/jquery.mb.YTPlayer.min.js")
                .Include("~/Scripts/plugins/jquery.mb.YTPlayer.js");
            ytPlayer.CdnFallbackExpression = "$.fn.YTPPlay";
            bundles.Add(ytPlayer);

            var bootstrap = new ScriptBundle("~/bundles/bootstrap", "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js")
                .Include("~/Scripts/bootstrap.js");
            bootstrap.CdnFallbackExpression = "$.fn.modal";
            bundles.Add(bootstrap);

            bundles.Add(new ScriptBundle("~/Scripts/site")
                .Include(
                "~/Scripts/respond.js")
                .Include(
                "~/Scripts/plugins/isotope/isotope.pkgd.min.js",
                "~/Scripts/plugins/jquery.backstretch.min.js", 
                "~/Scripts/plugins/jquery.appear.js", 
                "~/Scripts/plugins/light-gallery/lightGallery.js",
                "~/Scripts/template.js", 
                "~/Scripts/custom.js"));

            bundles.Add(new StyleBundle("~/Content/font-awesome", "//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")
                .Include("~/Content/font-awesome.css"));

            bundles.Add(new StyleBundle("~/Content/bootstrap", "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")
                .Include("~/Content/bootstrap.css"));

            bundles.Add(new StyleBundle("~/Content/YTPlayer", "//cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.1.5/css/jquery.mb.YTPlayer.min.css")
                .Include("~/Content/plugins/YTPlayer/jquery.mb.YTPlayer.min.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                 "~/Content/animate.css",
                 "~/Content/animations.css",
                 "~/Content/plugins/light-gallery/css/lightGallery.css",
                 "~/Content/Site.css"));
        }
    }
}
