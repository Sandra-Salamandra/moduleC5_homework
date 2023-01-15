/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
 <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const studentNode = xmlDOM.querySelectorAll('student');

/* Этап 3. Получение данных и Запись данных в результирующий объект */

const result = {list: []};

studentNode.forEach(student => {
  const name = student.querySelector('name');
  const firstName = name.querySelector('first');
  const secondName = name.querySelector('second');
  const age = student.querySelector('age');
  const prof = student.querySelector('prof');
  const langAttr = name.getAttribute('lang');  // Получение данных из атрибутов
  result.list.push({
      name : firstName.textContent +' '+ secondName.textContent,
      age : Number(age.textContent),
      prof : prof.textContent,
      lang : langAttr,
  });
});

console.log(result);