const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}
function clearDisplay(){
    display.value = "";
}
function changeSign(){
    display.value *= -1;
}
function percentage(){
    display.value /= 100;
}