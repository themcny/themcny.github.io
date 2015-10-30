$(function () {
$('.each_card').click(function() {
    $(this).toggleClass('flip');
});
});

$(function () {
    var deck = $("section");
    var card = deck.children();
    while (card.length) {
        deck.append(card.splice(Math.floor(Math.random() * card.length), 1)[0]);
    }
});