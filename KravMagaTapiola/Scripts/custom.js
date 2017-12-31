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
(function() {
    $("#banner-player").YTPlayer({
        fitToBackground: true,
        videoId: "vXoiZjnCi30",
        pauseOnScroll: false,
        callback: function() {
            $("#banner-image").remove();
            $("#banner-loader").remove();
        }
    });
})();
$(document).ready(function () {
   
    function pauseAllYoutube() {
        $("#lg-gallery .current iframe[src*=\"youtube.com\"]").each(function () {
            const iframe = $(this)[0].contentWindow;
            iframe.postMessage("{\"event\":\"command\",\"func\":\"pauseVideo\",\"args\":\"\"}", "*");
        });
    }
    $("#video-gallery").lightGallery({
        lang: {
            allPhotos: "Kaikki videot"
        },
        videoAutoplay: true,
        onSlideBefore: function () {
            pauseAllYoutube();
        },
        onBeforeClose: function () {
            pauseAllYoutube();
        },
        cssEasing: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
        selector: $("#video-gallery a"),
        youtubePlayerParams: {
            enablejsapi: 1,
            modestbranding: 1,
            showinfo: 1,
            rel: 0
        }
    });
    $(".modal").on("hidden.bs.modal", function (e) {
        $(e.target).find("iframe").attr("src", $(e.target).find("iframe").attr("src"));
    });
});

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