

function addColorByElementsId(ElementId) {
    const getElement = document.getElementById(ElementId);
    getElement.classList.add('bg-[#FFA500]');
}
function addWarningColorByElementsId(ElementId) {
    const getElement = document.getElementById(ElementId);
    getElement.classList.add('bg-[#FF0000]');
}
function removeWarningColorByElementsId(ElementId) {
    const getElement = document.getElementById(ElementId);
    getElement.classList.remove('bg-[#FF0000]');
}
function removeColorByElementsId(ElementId) {
    const getElement = document.getElementById(ElementId);
    getElement.classList.remove('bg-[#FFA500]');
}


function getTextByElementId(ElementId , innerText) {

    const getElement = document.getElementById(ElementId);
    

    if(getElement.innerText < 9){
        getElement.innerText = "0"+innerText;
    }else{
        getElement.innerText = innerText;
    }



}

function getTextValueByElementId(ElementId) {

    const getElement = document.getElementById(ElementId);
    const Stringvalue = getElement.innerText;
    const value = parseInt(Stringvalue);

    return value


}


function getRandomAlphabet() {
    const AlphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const AlphabetArray = AlphabetString.split('')

    const Rendomnum = Math.round(Math.random() * 25);
    const RandomAlphabet = AlphabetArray[Rendomnum];

    return RandomAlphabet;


}