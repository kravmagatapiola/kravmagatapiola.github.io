using System.Web.Mvc;
using KravMagaTapiola.ActionFilters;

namespace KravMagaTapiola.Controllers
{
    public class HomeController : Controller
    {
        [ETag]
        public ActionResult Index()
        {
            return View();
        }
    }
}
