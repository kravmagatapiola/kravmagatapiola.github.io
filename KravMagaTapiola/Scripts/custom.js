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

    $("#banner-image").backstretch("images/video_placeholder.jpg");

    const options = {
        onReady: function() {
            $("#banner-image").remove();
            $("#banner-loader").remove();
        },
        playOnlyIfVisible: false,
        showYTLogo: false,
        stopMovieOnBlur: false,
        mobileFallbackImage: "images/video_placeholder.jpg",
        showControls: false,
        ratio: "auto",
        opacity: 1,
        autoPlay: true,
        loop: true,
        mute: true,
        startAt: 0,
        gaTrack: false,
        addRaster: false,
        quality: "default"
    };

    $(".banner-player").YTPlayer(options);
});