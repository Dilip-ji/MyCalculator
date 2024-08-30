function appendToDisplay(value){
    document.getElementById("display").value += value;
}

function calculate(){
    document.getElementById("display").value = eval(document.getElementById("display").value);
}

function clr(){
    document.getElementById("display").value='';
}

// eval('2+3') = '5'

// a = '1'
// a += '8'
// a = a + '8'
// a = '1' + '8'
// a = '18'