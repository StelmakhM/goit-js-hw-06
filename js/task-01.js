const item = document.querySelectorAll('.item');
console.log(`Number of categories: ${item.length}`);

item.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})