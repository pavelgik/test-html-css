console.log('test');

var letReviewBtn = document.getElementById('letReviewBtn');
var popupWrp = document.getElementById('popupWrp');
var popupCloseBtn = document.getElementById('popupCloseBtn')

letReviewBtn.addEventListener('click', () => {
    console.log('test click');
    popupWrp.classList.toggle('popup-close');
})

popupCloseBtn.addEventListener('click', () => {
    popupWrp.classList.toggle('popup-close');
})
console.log(letReviewBtn);

