//  const te = ["Earl Gray", "Lemon", "Sitron", "blackberry", "black tea", "green tea", "herbal tea", "ginger tea", "peppermint", "chamomile"];
//  console.log(te.length);

//  console.log(te.slice(1, 9));


 function hentUtvalg(array, start, end){

return array.slice(start, end);

 }

 const te = ["Earl Gray", "Lemon", "Sitron", "blackberry", "black tea", "green tea", "herbal tea", "ginger tea", "peppermint", "chamomile"];
const utvalg = hentUtvalg(te, 1, 9);
console.log(utvalg);

