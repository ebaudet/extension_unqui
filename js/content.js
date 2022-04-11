mp = $(".mediaplugin_videojs");
mp.map(function (index, value) {
    url = $('audio > source', value).attr('src');
    $(value).append(function(){
        $(this).append("<div><a href='" + url + "' class='btn btn-secondary'>Descargar el audio</a></div>");
    })
    $('audio', value).attr('data-setup', '{ "playbackRates": [0.5, 1, 1.5, 2] }');
});

$('.content-alignment-container').removeClass('no-overflow');
$('#region-main').css('overflow-x', 'visible');
