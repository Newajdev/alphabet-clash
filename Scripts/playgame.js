function keyboardHandel(events) {
    const keyboardpras = events.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');

    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();






    if (keyboardpras === expectedAlphabet) {

        removeColorById(expectedAlphabet);
        continueGame();

        const CurrentScore = document.getElementById('curent-score');
        const TotalScore = document.getElementById('total-Score');
        const socreText = CurrentScore.innerText;
        const Scorenum = parseInt(socreText);

        const score = Scorenum + 1;
        
        

        if(score <= 9){
            CurrentScore.innerText = "0"+score;
            TotalScore.innerText = "0"+score;
        }else{
            CurrentScore.innerText = score;
            TotalScore.innerText = score;
        }



    } else {
        const Currentlife = document.getElementById('curent-life')
        const lifeText = Currentlife.innerText;
        const lifenum = parseInt(lifeText);

        const life = lifenum - 1;
        Currentlife.innerText = "0" + life;

        if (life === 0) {
            addClassById('playground');
            removeClassById('gameover');
        }
    }


}

document.addEventListener('keyup', keyboardHandel);


// Genaret Rendom Number

function continueGame() {
    const alphabet = Alphabet();
    const settext = document.getElementById('current-alphabet');
    settext.innerText = alphabet;

    const addcolor = addColorById(alphabet);



}

function play() {
    addClassById('playnow');
    removeClassById('playground');
    addClassById('gameover');
    continueGame();
}

