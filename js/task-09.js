function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.body;
const changeColorBtn = document.querySelector('.change-color');
const span = document.querySelector('.color');


const onClickBgChange = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
};


changeColorBtn.addEventListener('click', onClickBgChange);
