var init = function () {
    var div = $("#bubbleA");
    var text = div.html();
    div.html('<span class="show"></span><span class="hide" style="visibility: hidden;">' + $.trim(text) + '</span>');
};

var step = function () {
    var clone = $("#bubbleA").children().clone();
    var textShown = $(clone[0]).text();
    var textHidden = $(clone[1]).text();
    $(clone[0]).text(textShown + textHidden.substr(0, 1));
    $(clone[1]).text(textHidden.substr(1));
    $("#bubbleA").html(clone);
    return (textHidden.substr(1).length > 0);
};


var start = function () {
    setTimeout(function () {
        if (step()) {
            start();
        }
    }, 22);
};

$(function () {
    init();
});

$(document).on('click',function(){
    start();
});