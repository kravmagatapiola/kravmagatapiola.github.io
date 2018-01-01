WebFontConfig = {
    google: {
        families: [
            "Open+Sans:400italic,700italic,400,700,300&amp;subset=latin,latin-ext",
            "Raleway:700,400,300"
        ]
    }
};
(function () {
    const wf = document.createElement("script");
    wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s);
})();
$(function($) {
    $("#banner-player").YTPlayer({
        fitToBackground: true,
        videoId: "vXoiZjnCi30",
        pauseOnScroll: false,
        playerVars: {
            suggestedQuality: "small"
        },
        callback: function() {
            $("#banner-image").remove();
            $("#banner-loader").remove();
           
        }
    });
   
});
$(document).ready(function () {
    $("#video-gallery").lightGallery({
        download: false,
        autoplayFirstVideo: true,
        youtubePlayerParams: { autoplay: 1, modestbranding: 1, showinfo: 0, controls: 0 }
    });
    $(".modal").on("hidden.bs.modal", function (e) {
        $(e.target).find("iframe").attr("src", $(e.target).find("iframe").attr("src"));
    });
    $("#fast-map a").on("click", function (e) {
        e.preventDefault();
        const map = $(this).parent();
        const iframeSrc = map.data("iframe-src");
        const iframeWidth = map.data("iframe-width");
        const iframeHeight = map.data("iframe-height");
        map.html(`<iframe src="${iframeSrc}" frameborder="0" style="border:0; width:${iframeWidth}; height:${iframeHeight};" allowfullscreen></iframe>`);

        return false;
    });
});
function init() {
    const vidDefer = $(".embedded-video");
    for (let i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute("data-src")) {
            vidDefer[i].setAttribute("src", vidDefer[i].getAttribute("data-src"));
        }
    }
}
window.onload = init;
(function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    i[r] = i[r] ||
        function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");

ga("create", "UA-66211929-1", "auto");
ga("send", "pageview");

(function (d, s, id) {
    var js;
    const mjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.async = true;
    js.src = "https://kravmaga.myclub.fi/assets/embed_v2.js";
    mjs.parentNode.insertBefore(js, mjs);
}(document, "script", "myclub-embed-js"));
