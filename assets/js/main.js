
//chiedere quanti chilometri si vogliono percorrere 
const km = Number(prompt("Quanti chilometri vuoi percorrere?"));
const km_price = 0.21;

//calcolo del prezzo in base ai chilometri percorsi
const ticket_price = km * km_price;


//chiedere quanti anni ha il passeggero
const passenger_age = Number(prompt("Quanti hanni hai?"));

//dichiarazione formule di sconto
const minors_discount = ticket_price * 20 / 100;
const over_discount = ticket_price * 40 / 100;

if (passenger_age < 18) {
    //sconto del 20% per i minorenni
    minors_discount;
    document.getElementById("final_ticket_price").innerHTML = "il costo è di " + minors_discount.toFixed(2) + " euro"
    
} else if (passenger_age > 65) {
    //sconto del 40% per gli over 65
    over_discount;
    document.getElementById("final_ticket_price").innerHTML = "il costo è di " + over_discount.toFixed(2) + " euro"

} else {
    //prezzo invariato
    document.getElementById("final_ticket_price").innerHTML = "il costo è di " + ticket_price.toFixed(2) + " euro"
}



