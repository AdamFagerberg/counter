let count = 0;

let plusElement = document.getElementById("plus");
let minusElement = document.getElementById("minus");
let resetElement = document.getElementById("reset");
let displayElement = document.getElementById("display");

plusElement.addEventListener('click', function(){
    count++;
    displayElement.innerHTML = count;
})

minusElement.addEventListener ('click', function(){
    count --;
    displayElement.innerHTML = count;
})

resetElement.addEventListener ('click', function(){
    count = 0;
    displayElement.innerHTML = count;
})
