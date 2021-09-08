mediaplugin = $(".mediaplugin_videojs");

for (var i = 0; i < mediaplugin.length; i++) {
    url = $('audio > source', mediaplugin[i]).attr('src');
    $(mediaplugin[i]).append(function(){
        $(this).append("<div><a href='" + url + "' class='btn btn-secondary'>descargar el audio</a></div>");
    });
    $('audio', mediaplugin[i]).attr('data-setup', '{ "playbackRates": [0.5, 1, 1.5, 2] }');
}

$('.content-alignment-container').removeClass('no-overflow');
