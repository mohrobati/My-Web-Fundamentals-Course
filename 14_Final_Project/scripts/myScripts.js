$('.faq-item').find('.card-header').on('click', function () {
    var currIcon = $(this).find('.open-plus');
    if(currIcon.attr('data-icon') === 'times')
        currIcon.attr('data-icon', 'plus');
    else {
        $('.open-plus').attr('data-icon', 'plus');
        currIcon.attr('data-icon', 'times');
    }

});

setVideoInScreen();

window.addEventListener("resize", function () {
    setVideoInScreen()
});

function setVideoInScreen() {
    var pic = $('#enjoy').find('img');
    var width  = pic.css('width');
    var height  = pic.css('height');
    var sizeOfTheScreenX = (parseInt(width)*0.7333).toString() + 'px';
    var sizeOfTheScreenY = (parseInt(height)*0.5568).toString() + 'px';
    $('#video1').css('width', sizeOfTheScreenX)
        .css('height', sizeOfTheScreenY)

}