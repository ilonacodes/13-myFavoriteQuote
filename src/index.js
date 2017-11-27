var firstPart = document.querySelector('.quote-1').innerHTML;
var splitFirstQuote = firstPart.split(' ');

for (var i = 0; i < splitFirstQuote.length; i++) {
    if (i % 2 === 0) {
        splitFirstQuote[i] = '<span class="hide">' + splitFirstQuote[i] + '</span>';
    }
}
var joinedFirstQuote = splitFirstQuote.join(' ');
document.querySelectorAll('.quote-1')[0].innerHTML = joinedFirstQuote;


var secondPart = document.querySelector('.quote-2').innerHTML;
var splitSecondQuote = secondPart.split(' ');

for (var j = 0; j < splitSecondQuote.length; j++) {
    if (j % 2 !== 0) {
        splitSecondQuote[j] = '<span class="hide">' + splitSecondQuote[j] + '</span>';
    }
}
var joinedSecondQuote = splitSecondQuote.join(' ');
document.querySelectorAll('.quote-2')[0].innerHTML = joinedSecondQuote;