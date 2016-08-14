$(document).ready(function () {
    $("#video").simplePlayer();
    function pauseAllYoutube() {
        $("#lg-gallery .current iframe[src*=\"youtube.com\"]").each(function () {
            var iframe = $(this)[0].contentWindow;
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
    $("#eventlist").gCalReader({
        calendarId: "jsi7t3pgbtk0qoad3j0mvo7qn8@group.calendar.google.com",
        apiKey: "AIzaSyAVhU0GdCZQidylxz7whIln82rWtZ4cIDQ",
        sortDescending: false,
        maxEvents: 4,
        dateFormat: "ShortDate+ShortTime"
    });
});