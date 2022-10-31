function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const containerForBoxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

let boxSize = 30;
let boxArr = [];

const createBoxes = (event) => {
  let amountOfBoxes = input.value;
  for (let i = 0; i < amountOfBoxes; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`
    boxSize += 10;

    boxArr.push(box);
    containerForBoxes.append(...boxArr);
  }
}


const destroyBoxes = (event) => {
  containerForBoxes.innerHTML = '';
  boxSize = 30;
  boxArr = [];
};


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
