// Lag en funksjon som tar en tekst inn. Deler den i to deler på midten og snur rekkefølgen på den første tekst delen og returnerer hele teksten.
// // output: Dette er en
// console.log("dette er en lang tekst")
// const text = "Dette er en lang tekst"
// console.log(text.length);
// console.log(text.slice(11, 22));

// function finnTreff(search, text){
// if (text.search(search) == -1){
//     return -1;
// }else{
//     return text.search(search);
// }

// }

// console.log(finnTreff("john", "min lører heter john"));

function swapText(text){
// console.log(text.length)
// console.log(text);

let centerIndex = (text.length/ 2);

// console.log(centerIndex % 10);
if(centerIndex % 10 >= 5){//
    centerIndex = centerIndex.toFixed(0) - 1;//
} else{//

}//
// console.log(centerIndex);

let firstPart = text.slice(0, centerIndex);
// console.log(firstPart);
let secondPart = text.slice(centerIndex);

// console.log(secondPart + firstPart);
return secondPart + firstPart;
}

const minTekst="KodeHode har en fantastisk klasse i år";
let minTekstEndret;

minTekstEndret= swapText(minTekst); // her kaller jeg på funksjonen, det vil sei at eg køyrer funksjonen med angitt data.
console.log(minTekstEndret);