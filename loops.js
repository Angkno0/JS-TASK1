// for-løkke
// ------------------------------------------------------------------------------------------------------------------

// exs 1
// let i =1;

// for (let i = 5; i<10, i+=2){
//     console.log(i);
// }
// exs 2
// for(let i = 0; i<10; i++){
//     console.log(i)
// }

// exs 3 // teller ned istadenfor opp.
// for(let i= 100; i> 0; i--){
//     console.log(i)
// }

// OBS: ungå evig loop

// exs 4
// for(let i = 1; i % 2 !== 0; i+=2){ // || er logisk OR && er ligisk AND
//     console.log(i)
// }


// exs 5
//du kan bruke det variabel navnet du vil, men bransjestandard er i, j , k ......
// for(let teller = 50; letter > 0; teller--){
//     console.log(teller);
// }

// exs 6

// let liste = ["audi", "BMW", "toyota", "honda"];
// for(let i =0; i < liste.length; i++){
//     liste[i] = liste[i].toUpperCase();
//     console.log(liste(0))
// }

// exs 8

// const frukter =["eple", "banan", "appelsin", "drue", "pære", "ananas", "kiwi", "jordbær", "mandarin"];

// for(let frukt of frukter){
//     console.log(frukt);
// }

// for(const[index, frukt] of frukter.entries()){
//     console.log(`indeks: ${index}, frukt: ${frukt}`);
// }

// console.log(frukter);

// while løkke (while loop)
// -------------------------------------------------------------------------------
// syntax:
// while(utrykk){
// kodeblokk
// }

// let i = 1;
// while(i<=10){
//      console.log(i);
//      i++;//HUSK Å ENDRE PÅ TELLER (i), SLIK AT LØKKEN VIL ENGANG SLUTTE!
//     }


// eks 2

// let ferdig = false;
// let teller = 1;
// while(!ferdig){ //ferdig er det same som ferdig=== false. uttales som "not ferdig". != not
//     if(teller === 10){
//         ferdig = true;
//     }
//     console.log(teller);
//     teller ++;
// }

// eks 3

// let nummer;

// while(nummer !==7){
//     nummer = math.floor(math.random() * 10) + 1;
//     console.log("trukket nummer", nummer);
//     teller++;
// }


// console.log("teller: " + teller + "- fant: " +et nummer);

// let nummer;
// let teller = 0;

//  while(nummer !==7){
//      nummer = Math.floor(Math.random() * 10) + 1;
//      console.log("trukket nummer", nummer);
//      teller++;
//  }


//  console.log("teller: " + teller + "- fant: " + nummer);

// Do-while-løkke:
// ------------------------------------------------------------------------------------------------------
// forskjell mellom en do-while og en while løkke til ALLTIDkjøre kodeblokken minst en gang.
// dette er fordi kodeblokken blir kjørt en gang før den skjekker om den skal starte løkken på nytt
// syntax
// do {

// kodeblock 
// } while (Uttrykk);