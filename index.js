var subbtn = document.querySelector(".button-main");
var textbox = document.getElementById("name");
function checkok(){

    if(checkString(textbox.value)){
        
        let propname = textbox.value;  
        localStorage.setItem("propname",propname);  
        window.open("primopiano.html","_self");
    }else{
        alert("Nome non valido!")
    }

}

function checkString(inputString) {

    if (!isNaN(inputString)) {
        return false;  
    }    
  
    if (inputString.trim() === "") {
        return false;  
    }

    return true;  
}

function propname(){
    let proplabel = document.getElementById("proplabel");
    let propname = localStorage.getItem("propname");

    proplabel.innerText=propname;   

}

let arraybtn = document.querySelectorAll(".eltbutton");
let ombrearray = document.querySelectorAll(".ombra");

let x;
arraybtn.forEach(btn => {
    btn.addEventListener("click",()=>{
        for(let i = 0; i<arraybtn.length; i++){
            if(btn == arraybtn[i]){
                x = i;
            }
        }
        if(btn.value == "0"){
            btn.innerHTML = "ON";
            btn.classList.add("eltbuttonactive");
            btn.value = "1"
            ombrearray[x].classList.remove("lightsoff")
        }else{
            btn.innerHTML = "OFF";
            btn.classList.remove("eltbuttonactive");
            btn.value = "0"
            ombrearray[x].classList.add("lightsoff")
        }
        
    })
});
