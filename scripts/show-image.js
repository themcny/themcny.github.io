/*document.getElementById('answer').style.display = 'none';
document.getElementById('showAnswer').onclick=function(){
  // Remove any element-specific value, falling back to stylesheets
  document.getElementById('answer').style.display='';
};
*/
$.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};

$(document).ready(function(){
    $("answer").click(function(){
        $("#answer").slideFadeToggle(1000);
    });
});