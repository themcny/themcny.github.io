$(document).ready(function(){
  var bulletPoints = ['item-0', 'item-1', 'item-2', 'item-3', 'item-4'];

  forEach(bulletPoints, function(bulletPoint){
    var element = 'div#' + bulletPoint;
    typingEffect(element);
  }
})

function typingEffect(bullet) {
  var bulletLine = $(bullet).text();
  var timeOut;
  var index = 0;

  (function typingEffect(){
    timeOut = setTimeout(function() {
      index++;
      var subText = text.substring(0, index);

      $(bullet).text(subText);

      typingEffect();

      if (index == bulletLine.length) {
        clearTimeout(timeOut);
      }
    }, 200);
  }())
}

// function typingEffect() {
//   var characters = text.split('');
//   var length = characters.length;
//   var subtext;
//   var i = 0;
// 
//   forEach(characters, function(){
//     var timeOut = setTimeout(function() {
//       i++;
//       subtext += characters;
//       if (i == length) {
//         clearTimeout(timeOut)
//       }
//     }, 200);
//   });
// }
