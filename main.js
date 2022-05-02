/* //Стри цей рядок коментарію щоб 1 варіан домашки відкрився!

let summary = 25;
let a = 6;
let b = 5;
let z = a*b;
let age = prompt ('вік?', '');


//1 варіант

let message = (age < summary)? 'до 25' :
    (age < z)? 'більше 25' :
    'ви вели завелике число ведіть до 30';

console.log(message);


/*
//2 варіант

if (age <summary) {
    message = 'до 25';
} else if (age < z) {
    message = 'більше 25';
} else {
    message = 'ви вели завелике число ведіть до 30';
} 
console.log(message);
*/

