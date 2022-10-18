function addTwo(x, y){
     let result= x+y;
     return result;
     

}

function onClick(){
    const button = document.querySelector("button");
     button.addEventListener('click', 'onClick');
    const x = document.querySelector("#first").value;
    const y = document.querySelector("#second").value;
    
    
     const res = addTwo(parseInt(x), parseInt(y));
     let resultDev = document.querySelector("#result");
     resultDev.textContent = x + "+" + y + "=" + res;
}