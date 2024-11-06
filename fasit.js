// function swapHalf(text){
// let centerIndex =text.length /2;
// let firstHalf;
// let secondHalf;

// centerIndex = centerIndex.toFixed(0);
// // console.log(centerIndex);

// firstHalf = text.slice(0, centerIndex);
// secondHalf = text.slice(centerIndex);

// // console.log(text);
// // console.log(firstHalf);
// // console.log(secondHalf);
// // console.log(secondHalf + firstHalf) 
// return secondHalf + firstHalf;
// }

// let text =" Pizzakveld på tredet er kjømpegøy";
// let svar; 
// svar = swapHalf(tekst); //funksjonen returnerer "det er kjempegøy pizzakveld på tre"
//                         // det blir så lagret i variabelen svar fordi vi har satt til et svar skal vere = det funksjonen returnerer
// console.log(svar);





// // oppg 2

// function switchCase(text, upperCase){
// if (upperCase === true){
//     // endfre teksten til uppercase
//     text.toUpperCase();
// } else {
//     //endre teksten til lowercase
//     return text.toLowerCase();
// }

// }

// tekst = "det er SOL i dag"
// storeBokstaver = true;
// svar = switchCase(tekst, storeBokstaver);
// console.log(svar);
// storeBokstaver = false;
// svar = switchCase(tekst, storeBokstaver);
// console.log(svar);


// // oppg 3

// function ukedag(text){

//     switch (text.toLowerCase()){
//         case "mandag":
//             return "det er mandag, det er lenge til helga huff."
//          case "tirsdag":
//             return "det er trsdag, det er lenge til helga huff."
//          case "onsdag":
//             return "det er onsdag, det er lenge til helga huff."
//          case "torsdag":
//             return "det er torsdag, det er lenge til helga huff."
//          case "fredag":
//             return "det er fredag, det er lenge til helga huff."
//          case "laurdag":
//             return "det er laurdag, det er lenge til helga huff."
//          case "søndag":
//             return "det er søndag, det er lenge til helga huff."
//             default:
//                 return "du har ikkje tastet inn rett ukedag"
//     }

// }

// tekst = "MANDAG";

// console.log(ukedag(tekst));


// // oppg 4

// function sammeBokstav(text){
//     let trimDetNed = text.trim().toLowerCase(); //comando chaining
//     // shaining av komandoer gjer at du slipper flere linjer med kode
//     // kunne ha vært løst med koden nedenfra
//     // let trimDetNed = text.trim();
//     // trimDetNed = trimDetNed. to LowerCase();
//     let first = text.charAt(0);
//     let last = text.charAt(text.length -1);
// console.log(first);
// console.log(last);

// if (first === last){
//     return true;
// }else {
//     return false;
// }
// //     return trimDetNed[0] === trimDetNed[trimDetNed.length -1];
// //     return text.charAt(0) === text.charAt[text.length -1];

// }

// console.log(sammeBokstav("otto"));


// // OPPG 5 

// function textCheck(search, liste){
//     return liste.includes(search);
// }

// let liste = ["pizza", "taco", "hamburger", "nachos"];
// let finn = "taco";

// console.log(textCheck (finn, liste));

// // oppg 7

// function identiskTekstCS(text, text2){


// if(text.toLowerCase() === text2.toLowerCase()){
//  return true;
// } else {
//     return false;
// }
// }
// identiskTekst( " is the text"," is not the same");
// identiskTekstCS( " is the text"," is not the same");


// // oppg 8 
// function checkForTextJavaScript(text){
// console.log(text);
// console.log(text.indexOf("jacascript"));
// if (text.indexOf(javascript) >= 0){
//     return true;
// }else {
//     return false;
// }


// }

// checkForTextJavaScript("dette er en tekst som inneholder ordet JavaScript i texten");


// // oppg 9

// function checkAge(age){
// if(age < 0 ){
//     return "du er ikkje født.";
// }else{
//     if(age <=13)
//         return "barn";{
//     }

//     if(age >= 13 && age <= 19){
//         return "tenåring";
// }

// if (age >= 20 && age <= 64){
//     return "voksen";
// }else{
//     return "pensjonist";
// }

// }
// }

// //her er det flere måter å organisere if og else på

// console.log(checkAge(13));


// // oppg 10

// function sjekkVocal(char){
//  const charLowerCase = char.toLowerCase();
//  const vocals = "aeiuyæøå";
// //  const v = ["a", "e", "i", "o", "u", "y", "æ", "ø", "å"];
// //  if(v.includes(charLowerCase)){
//  if(vocals.includes(charLowerCase)){
//     return "vokal";
//  }else{
//     return "konsonant";
//  }

// }

// // oppg 11

// function getSeason(month){
//     month = month.toLowerCase();

//     switch(month){
//         case "december":
//         case "january":
//         case "february":
//             return "winter";
//         case "march":
//         case "april":
//         case "may":
//             return "vår";
//         case "june":
//         case "july":
//         case "august":
//             return "sommer";
//         case "september":
//         case "october":
//         case "november":
//             return "høst";
//             default:
//                 return "Ugylding måned";
//     }
// }

// console.log(getSeason("december"));

// // oppg 12


// function hentUtvalg(array, start, end){

//     return array.slice(start, end);
    
//      }
    
//      const tea = ["Earl Gray", "Lemon", "Sitron", "blackberry", "black tea", "green tea", "herbal tea", "ginger tea", "peppermint", "chamomile"];
//     const utvalg = hentUtvalg(tea, 1, 9);
//     console.log(utvalg);


//     // send heller data inni funksjonen med parameter i stedet for bruk av global variabler i funksjonen.
//     let weatherList2 =["rainy", "sunny", "snowy", "windy"];

//     function weather(list){
//         console.log(list.slice(1, -1));
    
//     }
//     weather2(weatherList2);
//     console.log(weatherList2);


