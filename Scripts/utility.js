function addClassById (elementId){
    const ElementID= document.getElementById(elementId);
    ElementID.classList.add ('hidden');

}
function removeClassById (elementId){
    const ElementID= document.getElementById(elementId);
    ElementID.classList.remove ('hidden');

}

function addColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add ('bg-[#FFA500]');    
}
function removeColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove ('bg-[#FFA500]');    
}

function getElementById (elementId){
    const CurrentScore = document.getElementById(elementId)
    const socreText = CurrentScore.innerText;
    const Scorenum = parseInt(socreText)
}




function Alphabet(){

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    // console.log(alphabets);

    const randomNumber = Math.random()*25;
    const randomindex = Math.round(randomNumber);
    
    const alphabet = alphabets[randomindex];
    // console.log(alphabet);
    

    return alphabet;
    

}