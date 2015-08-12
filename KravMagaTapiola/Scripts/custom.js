/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
$(document).ready(function () {
    $("#video").simplePlayer();
    $(".modal").on('hidden.bs.modal', function (e) {
        
        $(e.target).find("iframe").attr("src", $(e.target).find("iframe").attr("src"));
    });
    $("#eventlist").gCalReader({
        calendarId: "kravmagatapiola@gmail.com",
        apiKey: "AIzaSyAVhU0GdCZQidylxz7whIln82rWtZ4cIDQ",
        sortDescending: false,
        maxEvents: 4,
        dateFormat: "ShortDate+ShortTime"
    });
});