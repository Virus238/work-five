

//1 варіант

let age = prompt ('Ведіть число 2022', '');

if (age == 2022) {
    alert ('ви вгадали');
} else if (isNaN(age)) {
    alert ('недопустиме значення');
} else {
    alert ('спробуйте ще раз');
}



/*
//2 варіант

let message = (age == 2022)? 'ви вгадали' :
    (isNaN(age))? 'недопустиме значення' :
    'спробуйте ще раз';

alert (message);
*/ 