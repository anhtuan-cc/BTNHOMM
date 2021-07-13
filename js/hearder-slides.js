function header() {
    var header_txt =
        "<div class=\"header\">\n" +
        "        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
        "            <!-- Indicators -->\n" +
        "            <ol class=\"carousel-indicators data-slide\">\n" +
        "                <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
        "                <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n" +
        "                <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n" +
        "            </ol>\n" +
        "\n" +
        "            <!-- Wrapper for slides -->\n" +
        "            <div class=\"carousel-inner\" role=\"listbox\">\n" +
        "                <div class=\"item active\">\n" +
        "                    <img src=\"./images/imagesForHome/MU26BHS.jpg\" alt=\"...\">\n" +
        "                    <div class=\"carousel-caption\">\n" +
        "                        <h1>Best Friend for Your Best Time</h1>\n" +
        "                        <h3>When pets are family, the benefits extend into society</h3>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"item\">\n" +
        "                    <img src=\"./images/imagesForHome/header1.jpg\" alt=\"...\">\n" +
        "                    <div class=\"carousel-caption\">\n" +
        "                        <h1>LOVE YOUR DOGS</h1>\n" +
        "                        <h3>When pets are family, the benefits extend into society</h3>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"item\">\n" +
        "                    <img src=\"./images/imagesForHome/hinh-nen-con-cho.jpg\" alt=\"...\">\n" +
        "                    <div class=\"carousel-caption\">\n" +
        "                        <h1>LOVE YOUR DOGS</h1>\n" +
        "                        <h3>When pets are family, the benefits extend into society</h3>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        "\n" +
        "            <!-- Controls -->\n" +
        "            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n" +
        "                <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n" +
        "                <span class=\"sr-only\">Previous</span>\n" +
        "            </a>\n" +
        "            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n" +
        "                <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n" +
        "                <span class=\"sr-only\">Next</span>\n" +
        "            </a>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "        </div>"

    document.getElementById("header-slides").innerHTML = header_txt;
}
header();