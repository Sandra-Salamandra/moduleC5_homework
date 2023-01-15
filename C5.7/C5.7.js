// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
const btn = document.querySelector('.j-btn');


btn.addEventListener('click', () => {
  
  const inputPage = document.querySelector('.j-inputPage').value;
  const inputLimit = document.querySelector('.j-inputLimit').value;

  if (!(1<= inputPage && inputPage <=10) && !(1<= inputLimit && inputLimit <=10)) {
    resultNode.innerHTML = "<p1>Номер страницы и лимит вне диапазона от 1 до 10</p1>"
  } else if (!(1<= inputPage && inputPage <=10)) {
    resultNode.innerHTML = "<p1>Номер страницы вне диапазона от 1 до 10</p1>"
  } else if (!(1<= inputLimit && inputLimit <=10)) {
    resultNode.innerHTML = "<p1>Лимит вне диапазона от 1 до 10</p1>"
  } else {

      fetch(`https://picsum.photos/v2/list?page=${inputPage.trim()}&limit=${inputLimit.trim()}`)
        .then(response=> response.json())
        .then(data => {
          let array = [];
          data.forEach(item => array.push(item.download_url));
          return array;
        })
        .then(urls => {
          localStorage.setItem('picUrls', JSON.stringify(urls));
          setPictures(urls);
        })
        .catch(() => console.log('Error'));
  }
})


function setPictures(picUrls) {
  let pictures = '';

  picUrls.forEach(item => {
    const picBlock = `
      <div class="pic">
        <img src="${item}" class="pic-image" alt="picture"/>
      </div> `;
      pictures += picBlock;
  });

  resultNode.innerHTML = pictures;
}


if (localStorage) {
    setPictures(JSON.parse(localStorage.getItem('picUrls')));
}