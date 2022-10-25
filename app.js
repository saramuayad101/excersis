function addTwo(num1, num2){
    let result= num1 + num2;
    return result;
    

}

function onClick(){
   
   const num1 = document.querySelector("#first").value;
   const num2 = document.querySelector("#second").value;
   
   
    const res = addTwo(parseInt(num1), parseInt(num2));
    let resultDev = document.querySelector("#result");
    resultDev.textContent = num1 + "+" + num2 + "=" + res;
}
const button = document.querySelector("button");
button.addEventListener("click", onClick);