const finalScore = localStorage.getItem('finalScore');

if(finalScore != null){
    if(finalScore < 9){
        document.getElementById("total-Score").innerText = "0"+finalScore;
    } else{
        document.getElementById("total-Score").innerText = ""+finalScore;
    }
}else{
    document.getElementById("total-Score").innerText = "00";
}



localStorage.removeItem("finalScore");

