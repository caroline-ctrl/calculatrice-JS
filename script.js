var number = [];
var signe;
var result;


// recupère et affiche le chiffre selectionné
function get_number(value) {
    number.push(value);
    document.getElementById('result').innerHTML = null;

    for (let i = 0; i < number.length; i++) {
        document.getElementById('numb1').innerHTML = number[0];
        document.getElementById('numb2').innerHTML = number[1];
    }
}


// récupère le signe
function get_signe(value) {
    signe = value;
    document.getElementById('signes').innerHTML = signe;

}


// realise l'opération
function operation() {
    for (let i = 0; i < number.length; i++) {
        let number1 = number[0];

        let number2 = number[1];

        let math = signe;

        if (math === "+") {
            result = number1 + number2
            document.getElementById('result').innerHTML = result;
            document.getElementById('egal').innerHTML = result;
        } else if (math === "-") {
            result = number1 - number2
            document.getElementById('result').innerHTML = result;
            document.getElementById('egal').innerHTML = result;
        } else if (math === "*") {
            result = number1 * number2
            document.getElementById('result').innerHTML = result;
            document.getElementById('egal').innerHTML = result;
        } else if (math === "/") {
            result = number1 / number2
            document.getElementById('result').innerHTML = result;
            document.getElementById('egal').innerHTML = result;
        } else if (math === "%") {
            result = number1 % number2
            document.getElementById('result').innerHTML = result;
            document.getElementById('egal').innerHTML = result;
        }
    }
}


// effacer les données
function delete_data() {
    number.splice(0);
    document.getElementById('result').innerHTML = null;
}



var number = [];
// a chaque fois que l'event "keydown" est utilisé, on fait appel a la function
window.addEventListener("keydown", (event) => {
    number.push(event.key); // recupère le number correspondant a la touche

    for (let i = 0; i < number.length; i++) {
        let number1 = parseInt(number[0]);
        let number2 = parseInt(number[2]);
        let math = number[1];

        if (math === "+") {
            result = number1 + number2
            document.getElementById('result').innerHTML = result;
        } else if (math === "-") {
            result = number1 - number2
            document.getElementById('result').innerHTML = result;
        } else if (math === "*") {
            result = number1 * number2
            document.getElementById('result').innerHTML = result;
        } else if (math === "/") {
            result = number1 / number2
            document.getElementById('result').innerHTML = result;
        } else if (math === "%") {
            result = number1 % number2
            document.getElementById('result').innerHTML = result;
        }
    }

    if (event.key === "Delete" || event.key === "Backspace"){
        number.splice(0);
        document.getElementById('result').innerHTML = null;    
    }
});