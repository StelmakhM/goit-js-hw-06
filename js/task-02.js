const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

// Додаємо в дом одразу гроно

const makeListItems = ingredients => {
  const items = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');
    return item
  })
  list.append(...items)
}

makeListItems(ingredients);



// Додаємо в ДОМ по одній ягідці

// const makeListItems = ingredients => {
//   ingredients.forEach(ingredient => {
//     const item = document.createElement('li');
//     item.textContent = ingredient;
//     item.classList.add('item');
//     list.append(item);
//   })
// }

// makeListItems(ingredients);




