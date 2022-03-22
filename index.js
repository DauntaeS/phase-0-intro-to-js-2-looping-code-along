// Code your solutions in this file


function writeCards(name1, event) {
    let newArray = [];
    for (let i = 0; i < name1.length; i++) {
   let message = (`Thank you, ${name1[i]}, for the wonderful ${event} gift!`);
   newArray.push(message);
    }
    return newArray; 
}   

function countDown(number) {
    let count = [];
    while (count < 11) {
        console.log(count++);
    } 
}
