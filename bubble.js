var init = function () {
    var div = document.querySelector("#bubbleA");
    var text = div.innerHTML;
    div.innerHTML = '<span class="show"></span><span class="hide" style="visibility: hidden;">' + text.trim() + '</span>';
};

var step = function () {
    var $bubble = document.querySelector("#bubbleA");
    var children = $bubble.children;
    var $shown = children[0].cloneNode(true);
    var $hidden = children[1].cloneNode(true);
    var textShown = $shown.textContent;
    var textHidden = $hidden.textContent;
    $shown.textContent = textShown + textHidden.substr(0, 1);
    $hidden.textContent = textHidden.substr(1);
    $bubble.innerHTML = "";
    $bubble.appendChild($shown);
    $bubble.appendChild($hidden);
    return (textHidden.substr(1).length > 0);
};

var start = function () {
    setTimeout(function () {
        if (step()) {
            start();
        }
    }, 22);
};


// === EXAMPLE ===
document.addEventListener('click',function(){
    start();
});


function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
    init();
});