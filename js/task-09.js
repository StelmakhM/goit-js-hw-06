function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.body;
const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');


const onClickBgChange = (event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
};


changeColorBtn.addEventListener('click', onClickBgChange);
