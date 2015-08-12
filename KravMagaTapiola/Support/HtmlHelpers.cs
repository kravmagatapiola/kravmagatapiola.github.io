using System;
using System.Web;

namespace KravMagaTapiola.Support
{
    public static class HtmlHelpers
    {
        public static IHtmlString ModalHeader(string header, int id)
        {
            string htmlString = string.Format("<div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\">"
            + "<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Sulje</span></button>"
        + "<h4 class=\"modal-title\" id=\"project-{1}-label\">{0}</h4></div>", header, id);
            return new HtmlString(htmlString);
        }
    }
}