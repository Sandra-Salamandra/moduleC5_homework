// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');

const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  // Настраиваем наш запрос
  const inputWidth = document.querySelector('.j-inputWidth').value;
  const inputHeight = document.querySelector('.j-inputHeight').value;

  if ((100<= inputWidth && inputWidth <=300) && (100<= inputHeight && inputHeight <=300)) {
    // Делаем запрос за данными
    fetch(`https://picsum.photos/${inputWidth.trim()}/${inputHeight.trim()}`)
      .then((response) => {
        resultNode.innerHTML = `<img src=${response.url} alt="some random pic">`;
      })
  }
  else if (isNaN(inputWidth && inputHeight)) {
    resultNode.innerHTML = "<p>Одно из чисел вне диапазона от 100 до 300</p>"
  }  
  else {
    resultNode.innerHTML = "<p>Одно из чисел вне диапазона от 100 до 300</p>";
  }
})
