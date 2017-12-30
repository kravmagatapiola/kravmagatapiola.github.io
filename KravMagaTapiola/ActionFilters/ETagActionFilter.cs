using System;
using System.IO;
using System.Security.Cryptography;
using System.Web;
using System.Web.Mvc;

namespace KravMagaTapiola.ActionFilters
{
    public class ETagAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.HttpContext.Response.Filter = new ETagActionFilter(filterContext.HttpContext.Response, filterContext.RequestContext.HttpContext.Request);
        }
    }

    public class ETagActionFilter : MemoryStream
    {
        private readonly HttpResponseBase response;
        private readonly HttpRequestBase request;
        private readonly Stream filter;

        public ETagActionFilter(HttpResponseBase response, HttpRequestBase request)
        {
            this.response = response;
            this.request = request;
            filter = response.Filter;
        }

        private static string GetToken(Stream stream)
        {
            var checksum = MD5.Create().ComputeHash(stream);
            return Convert.ToBase64String(checksum, 0, checksum.Length);
        }

        public override void Write(byte[] buffer, int offset, int count)
        {
            var data = new byte[count];

            Buffer.BlockCopy(buffer, offset, data, 0, count);

            var token = GetToken(new MemoryStream(data));
            var clientToken = request.Headers["If-None-Match"];

            if (token != clientToken)
            {
                response.AddHeader("ETag", token);
                filter.Write(data, 0, count);
            }
            else
            {
                response.SuppressContent = true;
                response.StatusCode = 304;
                response.StatusDescription = "Not Modified";
                response.AddHeader("Content-Length", "0");
            }
        }
    }
}