// 2nd Homework

// const fruits = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];

// console.log(fruits.map(item => item.name));




// for (let i = 2; i <= 10; i++){
//     if (i % 2 === 1) continue
//     console.log(i)
// }



// let i = 0;

// do {
//     console.log(`цифра ${i}!`);
//     i++;
// } while (i < 5);





// let num;

// do {
//   num = prompt("Введіть число більше за 100");
// } while (num <= 100 && num);




// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

// console.log( getAverageAge(girls) );

// 3rd home work

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Батьки дозволили?');
// }

// checkAge(15)



// function min(a,b) {
//     if (a < b) {
//         return console.log(a)
//     } else {
//         console.log(b)
//     }

// }

// min(7,5)


// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );


// const ask = (question, yes, no) => {
//     if (confirm(question))
//     { yes(); }
//     else {no()}
// }
// ask("Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );


// 5th hw

// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentInfo = {
//     name: "Іван ",
//     specialty: "економика ",
//     score: 8 ,
//     miss: 10 ,
//     showInfo: function () {
//         console.log("Студент " + this.name + "який навчається за спеціальністю " + this.specialty + "має середній балл " + this.score + " і " + this.miss + " пропущених уроків");
//     }
// }

// student1 = {
//     name: "Іван ",
//     specialty: "економика ",
//     score: 8,
//     miss: 10,
// }

// student2 = {
//     name: "Сергій ",
//     specialty: "лінгвістика ",
//     score: 11,
//     miss: 3,
// }

// student3 = {
//     name: "Андрій ",
//     specialty: "електроніка ",
//     score: 6,
//     miss: 14,
// }

// studentInfo.showInfo.call(student1);
// studentInfo.showInfo.bind(student2)();
// studentInfo.showInfo.call(student3);


//Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке



// const def = {
//     showDefinition() {
//         console.log("Те на що ви натиснули означає", this.definition)
//     }
// }

// const html = {
//     definition: "html - стандартизована мова розмітки документів для перегляду вебсторінок у браузері. Браузери отримують HTML документ від сервера за протоколами HTTP/HTTPS або відкривають з локального диска, далі інтерпретують код в інтерфейс, який відображатиметься на екрані монітора."
// };

// const css = {
//     definition: "css - це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду. Самі ж сторінки написані мовами розмітки даних."
// };

// document.querySelector('#html').addEventListener('click', def.showDefinition.bind(html));
// document.querySelector('#css').addEventListener('click', def.showDefinition.bind(css));



// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4


// const fruitBanana = {
//     name: "banana",
//     price:30
// }

// const fruitInfo = {
//     name: "banana",
//     weight: fruitWeight,
//     price: 30,
//     showInfo: function () {
//     console.log(`${name},  ${price} * ${this.weight}` )
//     }
// }


// banana = {
//     name: "banana",
//     weight: fruitWeight,
//     price: 20,
// };

// fruitInfo.showInfo.call(banana);
let fruitName = prompt("Please write name of fruit");
let fruitWeight = prompt("Please write weight of fruits");

let bananaprice = 30;
let cherryprice = 58;
let orangeprice = 89;

let price = (bananaprice * fruitWeight);
let lastprice = (bananaprice * fruitWeight)

const bananaInfo = function (fruitName, lastprice) {
    
    console.log(`${ fruitName }, ${lastprice}`)
}

bananaInfo.call(fruitName, lastprice);





