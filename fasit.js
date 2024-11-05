function swapHalf(text){
let centerIndex =text.length /2;
let firstHalf;
let secondHalf;

centerIndex = centerIndex.toFixed(0);
// console.log(centerIndex);

firstHalf = text.slice(0, centerIndex);
secondHalf = text.slice(centerIndex);

// console.log(text);
// console.log(firstHalf);
// console.log(secondHalf);
// console.log(secondHalf + firstHalf) 
return secondHalf + firstHalf;
}

let text =" Pizzakveld på tredet er kjømpegøy";
let svar; 
svar = swapHalf(tekst); //funksjonen returnerer "det er kjempegøy pizzakveld på tre"
                        // det blir så lagret i variabelen svar fordi vi har satt til et svar skal vere = det funksjonen returnerer
console.log(svar);





// oppg 2

function switchCase(text, upperCase){
if (upperCase === true){
    // endfre teksten til uppercase
    text.toUpperCase();
} else {
    //endre teksten til lowercase
    return text.toLowerCase();
}

}

tekst = "det er SOL i dag"
storeBokstaver = true;
svar = switchCase(tekst, storeBokstaver);
console.log(svar);
storeBokstaver = false;
svar = switchCase(tekst, storeBokstaver);
console.log(svar);


// oppg 3

function ukedag(text){

    switch (text.toLowerCase()){
        case "mandag":
            return "det er mandag, det er lenge til helga huff."
         case "tirsdag":
            return "det er trsdag, det er lenge til helga huff."
         case "onsdag":
            return "det er onsdag, det er lenge til helga huff."
         case "torsdag":
            return "det er torsdag, det er lenge til helga huff."
         case "fredag":
            return "det er fredag, det er lenge til helga huff."
         case "laurdag":
            return "det er laurdag, det er lenge til helga huff."
         case "søndag":
            return "det er søndag, det er lenge til helga huff."
            default:
                return "du har ikkje tastet inn rett ukedag"
    }

}

tekst = "MANDAG";

console.log(ukedag(tekst));


// oppg 4

function sammeBokstav(text){
    let trimDetNed = text.trim().toLowerCase(); //comando chaining
    // shaining av komandoer gjer at du slipper flere linjer med kode
    // kunne ha vært løst med koden nedenfra
    // let trimDetNed = text.trim();
    // trimDetNed = trimDetNed. to LowerCase();
    let first = text.charAt(0);
    let last = text.charAt(text.length -1);
console.log(first);
console.log(last);

if (first === last){
    return true;
}else {
    return false;
}
//     return trimDetNed[0] === trimDetNed[trimDetNed.length -1];
//     return text.charAt(0) === text.charAt[text.length -1];

}

console.log(sammeBokstav("otto"));


// OPPG 5 

function textCheck(search, liste){
    return liste.includes(search;)
}

let liste = ["pizza", "taco", "hamburger", "nachos"];
let finn = "taco";

console.log(textCheck (finn, liste));

