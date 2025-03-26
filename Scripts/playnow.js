document.addEventListener('keyup', function (events) {
    const userClick = events.key;

    if (userClick === 'Enter') {
        playnow();
    }



});


function playnow(){
    window.location.href='playground.html'
}