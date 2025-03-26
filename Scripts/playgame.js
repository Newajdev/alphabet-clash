document.addEventListener('keyup', function (events) {
    const userClick = events.key;

    const setAlphabet = document.getElementById('displayAlphabet')
    const textAlphabet = setAlphabet.innerText.toLowerCase();

    if (userClick === textAlphabet) {

        const textValue = getTextValueByElementId('default-Score')

        const currentScore = textValue + 1;

        getTextByElementId('default-Score', currentScore);

        localStorage.setItem("finalScore", currentScore);
        


        removeColorByElementsId(textAlphabet);
        removeWarningColorByElementsId(textAlphabet);
        ContinueGame();

    } else {

        const textValue = getTextValueByElementId('curent-life')

        const currentLife = textValue - 1;

        getTextByElementId('curent-life', currentLife);
        

        addWarningColorByElementsId(textAlphabet);


        if (currentLife === 0) {
            
            window.location.href = 'gameover.html';

        }

    }


    if (userClick === 'Escape') {
        window.location.href = 'gameover.html';
    }


});


ContinueGame();

function ContinueGame() {
    const Alphabet = getRandomAlphabet();

    const setAlphabet = document.getElementById('displayAlphabet')
    setAlphabet.innerText = Alphabet;

    addColorByElementsId(Alphabet);
}





