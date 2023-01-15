/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`;

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
const listPerson = data.list;

/* Этап 3. Получение данных и Запись данных в результирующий объект */
const list = [];

listPerson.forEach(person => {
  const name = person.name;
  const age = person.age;
  const prof = person.prof;
  list.push({
      name : name,
      age : Number(age),
      prof : prof,
    });
});

const result = {list};
console.log(result)


/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
const list = data.list;

/* Этап 3. Получение данных и Запись данных в результирующий объект */
const listPerson = [];

list.forEach(person => {
  const name = person.name;
  const age = person.age;
  const prof = person.prof;
  listPerson.push({
      name : name,
      age : Number(age),
      prof : prof,
    });
});

const result = {list: listPerson};
console.log(result)