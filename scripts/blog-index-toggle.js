
$.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};

$(document).ready(function(){
    $("sept").click(function(){
        $("#sept").slideFadeToggle(1000);
    });
});

$(document).ready(function(){
    $("oct").click(function(){
        $("#oct").slideFadeToggle(1000);
    });
});

$(document).ready(function(){
    $("nov").click(function(){
        $("#nov").slideFadeToggle(1000);
    });
});


$(document).ready(function(){
    $("dec").click(function(){
        $("#dec").slideFadeToggle(1000);
    });
});
