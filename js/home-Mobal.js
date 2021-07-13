function myMobalBox(event) {
    var mobalNode = "<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
        "  <div class=\"modal-dialog\" role=\"document\">\n" +
        "    <div class=\"modal-content\">\n" +
        "      <div class=\"modal-body\">\n" +
        "        <img style=\"width: 100%\" src= "+event.currentSrc+" alt=\"\">\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>"
    document.getElementById('myMobal').innerHTML= mobalNode;

}




