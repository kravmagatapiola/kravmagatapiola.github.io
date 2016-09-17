using System.Web.Mvc;

namespace KravMagaTapiola.Controllers
{
    public class ErrorController : Controller
    {
        public RedirectResult Index()
        {
            return RedirectPermanent(Url.Action("Index", "Home"));
        }

        public RedirectResult NotFound()
        {
            Response.StatusCode = 200;
            return RedirectPermanent(Url.Action("Index", "Home"));
        }
    }
}