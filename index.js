// Code your solutions in this file

// const name = ['Guadalupe', 'Ollie', 'Aki'];

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(names) {
    const array1 = []
    for (let i = 0; i < names.length; i++) {
        const letter = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        array1.push(letter);
        // names[i] = letter;
    }

return array1;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(i){
let countDown = 0
while ( countDown <= i){
console.log(countDown);
    countDown++;
}
return countDown;
}

