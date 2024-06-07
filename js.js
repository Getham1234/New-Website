function onButtonClick() {
    max = Math.floor(Number(document.getElementById("input").value)+1);
    if (max >= 1) { 
        x = Math.floor(Math.random()*max);
        text = x.toString();
        document.getElementById("display").style.color = "black";
        document.getElementById("display").innerHTML = text; 
    }
    else{
        document.getElementById("display").style.color = "red";
        document.getElementById("display").innerHTML = "Invalid Value";
    }
}

//document.getElementById("button").addEventListener('click', onButtonClick);