// №1
// Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5].map(item => item ** 2);


// №2
// Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

// let arr = [1, 2, 3, 4, 5, 5, 5, 3, 1, 2, 3, 3, 3, 3, 5, 4, 3, 4, 1, 2]
// let result = arr.reduce((sum, current) => sum + current, 0)


// №3
// Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

// function changeNumber(number) {
//   let arr = number.toString().split("");
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1 && arr[i - 1] % 2 === 1) {
//       newArr.push(":", arr[i]);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr.join("");
// }


// №4
// Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов.

// let arr1 = [1, 2, 3, 4, 8, 9, 9];
// let arr2 = [2, 3, 4, 5, 8, 9];
// arr = [];
// function sub(arr1, arr2) {
//   if (arr1.length > arr2.length) {
//     length = arr1.length;
//   } else {
//     length = arr2.length;
//   }
//   for (let i = 0; i < length; i++) {
//     let num1 = arr1[i] === undefined ? 0 : arr1[i];
//     let num2 = arr2[i] === undefined ? 0 : arr2[i];
//     if (num1 >= num2) {
//       arr.push(num1 - num2);
//     } else {
//       arr.push(num2 - num1);
//     }
//   }
//   return arr;
// }


// №5
// Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

// let arr1 = [1, 2, 3, 4, 8];
// let arr2 = [2, 3, 4, 5, 8, 0];
// arr = [];
// function sum(arr1, arr2) {
//   if (arr1.length > arr2.length) {
//     length = arr1.length;
//   } else {
//     length = arr2.length;
//   }
//   for (let i = 0; i < length; i++) {
//     let num1 = arr1[i] === undefined ? 0 : arr1[i];
//     let num2 = arr2[i] === undefined ? 0 : arr2[i];
//     arr.push(num1 + num2);
//   }
//   return arr;
// }


// №6
// Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

// let arr1 = [1, 2, 3]
// let arr2 = arr1.reverse()


// №7
// Фильтр юзеров Создать массив объектов для юзеров. Пример:
// [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

// let users = [{name: 'Ivan', age: 18}, {name: 'Petr', age: 12}, {name: 'Sidor', age: 25}]
// let adult = users.filter(user => user.age >= 18)
// let notAdult = users.filter(user => user.age < 18)


// №8
// Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.

// let arr = [1, 2, 2, 3, 4, 5, 6, 7, 8, 4, 44, 4, 4, 3, 3]
// const double = arr.filter((item, index) => index === arr.indexOf(item));


// №9
// Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)

// function checkIsPalindrom(str) {
//   let revStr = str.split("").reverse().join("");
//   return revStr === str ? true : false;
// }


// №10
// Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)

// function getIndex(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }


// №11
// Написать функцию search, которая принимает первым аргументом массив имен:
// [ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]
// и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например:
// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'si') -> ['Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'i') -> [‘Ivan’,'Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTr') -> [‘Petr’,'Petric']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTrooo') -> []

// function search(arr, str) {
//   let result = arr.filter(function (item) {
//     return item.toUpperCase().includes(str.toUpperCase());
//   });
//   return result;
// }


// №12
// Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет. Пример:
// checkIsEqaul([1,2,3], [1,2,3]) -> true
// checkIsEqaul([1,2,3], [1,2,3,4]) -> false
// checkIsEqaul([1,2,3], [1,'2',3]) -> false

// function checkIsEqaul(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }