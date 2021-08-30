// 1
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).

// let promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("The promise is fulfilled");
//   }, 3000);
// });

// promise.then((value) => {
//   console.log(value);
// });


// 2
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).\

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("The promise was rejected"));
//   }, 3000);
// }).catch((error) => {
//   console.log(error.message);
// });


// 3
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1000), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve(3000), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(5000), 5000)),
// ])
//   .then((results) => results.reduce((sum, current) => sum + current, 0))
//   .then((results) => console.log(results));


// 4
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.
  
  // let promise = fetch(`https://jsonplaceholder.typicode.com/users`)
  //   .then((response) => response.json())
  //   .then((result) => result.filter((item) => item.id % 2 === 0))
  //   .then((result) => console.log(result));


// 5
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1

// const cards = document.getElementById("1");

// function printCard(obj) {
//   let { name, username, phone, email, address, website, company } = obj;
//   let userCard = document.createElement("div");
//   userCard.classList.add("card");
//   userCard.append(
//     `Name: ${name}, Username: ${username}, Phone: ${phone}, E-mail: ${email}, Address: ${address}, Website: ${website}, Company: ${company}`
//   );
//   cards.append(userCard);
// }

// function getUsersCardList() {
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((response) => response.json())
//     .then((result) => {
//       result.forEach((item) => printCard(item));
//     });
// }

// getUsersCardList();


// 6
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2

// const todos = document.getElementById("2");
// function printTodo(title, isCompleted) {
//   let todo = document.createElement("div");
//   todo.classList.add("todo");
//   let todoTitle = document.createElement("p");
//   let todoCheckbox = document.createElement("input");
//   todoCheckbox.type = "checkbox";
//   isCompleted ? todoCheckbox.setAttribute("checked", "") : "";
//   todoTitle.append(title);
//   todo.append(todoCheckbox, todoTitle);
//   todos.append(todo);
// }
// function getTodoList() {
//   let userId = prompt("Введите число userId");
//   fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
//     .then((response) => response.json())
//     .then((result) => {
//       result.forEach((item) => {
//         let { title, completed } = item;
//         printTodo(title, completed);
//       });
//     });
// }
// getTodoList();


// 7
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото

// {
//   "albumId": 1,
//   "id": 4,
//   "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//   "url": "https://via.placeholder.com/600/d32776",
//   "thumbnailUrl": "https://via.placeholder.com/150/d32776"
// },
// Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3

// const photos = document.getElementById("3");

// function printPhoto(item) {
//   let photo = document.createElement("img");
//   photo.src = item.url
//   photos.append(photo);
// }

// function getUsersCardList() {
//   fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
//     .then((response) => response.json())
//     .then((result) => {
//       result.forEach((item) => printPhoto(item));
//     });
// }


// photos.addEventListener('click', event => {
//   if(event.target.tagName === 'IMG') {
//       toggleSize(event.target)
//       console.log(event.target)
//   }
// })

// function toggleSize(photo) {
//   photo.classList.toggle('bigphoto')
// }
// getUsersCardList()
