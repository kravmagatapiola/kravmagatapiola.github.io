/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function($){
	$(document).ready(function(){
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

	    $(window).on("load", function () {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$("body").scrollspy({ 
				target: ".scrollspy",
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
        if ($(".smooth-scroll").length > 0) {
            $(".smooth-scroll a[href*=\\#]:not([href=\\#]), a[href*=\\#]:not([href=\\#]).smooth-scroll").click(function() {
				if (location.pathname.replace(/^\//,"") === this.pathname.replace(/^\//,"") && location.hostname === this.hostname) {
					let target = $(this.hash);
					target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
					if (target.length) {
						$("html,body").animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq("only all and (min-width: 768px)") && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass(`animated object-visible ${animationEffect}`);
						}, 350);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass("object-visible");
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($(".isotope-container").length>0) {
		    $(window).on("load", function () {
				$(".isotope-container").fadeIn();
				var $container = $(".isotope-container").isotope({
					itemSelector: ".isotope-item",
					layoutMode: "masonry",
					transitionDuration: "0.6s",
					filter: "*"
				});
				// filter items on button click
				$(".filters").on( "click", "ul.nav li a", function() {
					const filterValue = $(this).attr("data-filter");
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);

/***
 *  KMT CUSTOM 
 ***/
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
