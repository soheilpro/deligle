$(function() {
  var term = $("#gbqfq").val();
  var url = "https://avosapi.delicious.com/api/v1/posts/you/time?keywords=" + encodeURIComponent(term);

  $.ajax(url).done(function(data) {
    var html = "";

    $.each(data.pkg, function(index, item){
      html += "\
        <li class='g'>\
          <div class='rc'>\
            <h3 class='r'>\
              <img src='https://delicious.com/img/logo.png' width='16' height='16' style='margin-right: 5px' />\
              <a href='" + item.url + "'>" + item.title + "</a>\
              <div class='s'>\
                <div>\
                  <div class='f kv' style='white-space: nowrap'>\
                    <cite class='st' style='font-size: 13px'>" + item.url + "</cite>\
                  </div>\
                  <span class='st' style='font-size: 13px'>" + (item.description || "") + "</span>\
                </div>\
              </div>\
            </h3>\
          </div>\
        </li>\
      ";
    });

    $("div.srg").first().prepend(html);
  });
});
