/* 1.+++ Написати функцію, яка у випадку якщо типи двох аргументів string поверне їх зконкатенований вираз,
якщо типи двох аргументів number - поверне їх помножене значення
та у будь якому випадку не співпадіння поверне текст There are no type matches for operation */
                               
// var arg1 = true;
// var arg2 = 5;

// typeChecker(arg1, arg2);

// function typeChecker(arg1, arg2) {
//   if (typeof arg1 === 'string' && typeof arg2 === 'string') {
//     console.log(arg1 + arg2);
//   } else if (typeof arg1 === "number" && typeof arg2 === "number") {
//     console.log(arg1 * arg2);
//   }
//   else{
//     console.log("There are no type matches for operation");
//   }
// }

// Приклад роботи функції:

//console.log(typeChecker(2, 3)); // виведе 6
//console.log(typeChecker("My", "text")); // виведе Mytext
//console.log(typeChecker(true, 5)); // виведе There are no type matches for operation

// /* 2. +++ Написати функцію, яка, використовуючи тернарний оператор, виводить у консоль Yes, якщо число
// позитивне, та No якщо воно негативне */
// function isNegative(value) {

// value >= 0 ? console.log('Yes') : console.log('No'); 
                        
// }
// isNegative(-5);

// // Приклад роботи функції:   
// //isNegative(-1); // виведе у консоль "Yes"
// //isNegative(1); // виведе у консоль "No"

/* 3. +++ Написати функцію, яка повертає true якщо перший аргумент ділиться на другий без остачі, 
// або якщо ні - повертає false */

// function divider(num1, num2) {
// if (num1 % num2 === 0){
// return true;
// } else {
// return false;
// }     

// }
// console.log(divider(4, 2));
// Приклад роботи функції:
//console.log(divider(4, 2)); // виведе у консоль true
//console.log(divider(3, 2)); // виведе у консоль false

/* 4. Написати функцію, яка рекурсивно виводить в консоль аргумент та збільшує його на 2 якщо аргумент не
перевищує за значенням число 10 */


function recursiveAddition(value) {
    if (value <= 10) {
      console.log(value);
      recursiveAddition(value + 2);
    }
  
}

// Приклад роботи функції:
recursiveAddition(5); // виведе в консоль по черзі 5, 7, 9
//recursiveAddition(2); // виведе в консоль по черзі 2, 4, 6, 8, 10
recursiveAddition(15); // не виведе нічого



