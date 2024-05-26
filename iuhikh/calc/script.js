
function appendToDisplay(value) {
    let display = document.getElementById('hisse_1');
    display.value += value;
}

function calculate() {
    let display = document.getElementById('hisse_1');
    let result = eval(display.value); 
    display.value = result;
}

function clearDisplay() {
    let display = document.getElementById('hisse_1');
    display.value = ' ';
}