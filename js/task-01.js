const categoriesLength = document.querySelector(`ul`).children.length;
console.log(`Number of categories:`, categoriesLength);

const allCategory = document.querySelector(`#categories`);
// console.log(allCategory);

const allItems = document.querySelectorAll('.item');
allItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const length = item.querySelectorAll('li').length;
    console.log(`Category: ${title}
     Elements: ${length}`);
});


// const firstItem = allCategory.firstElementChild;
// // console.log(firstItem);
// const firstItemTextEl = firstItem.querySelector(`h2`);
// // console.log(firstItemText)
// console.log('Category:', firstItemTextEl.textContent);
// const firstItemEl = firstItem.querySelector(`ul`).children.length;
// console.log(`Elements:`, firstItemEl); 

// const secondItem = allCategory.children[1];
// const secondItemTextEl = secondItem.querySelector(`h2`);
// console.log('Category:', secondItemTextEl.textContent);
// const secondItemEl = secondItem.querySelector(`ul`).children.length;
// console.log(`Elements:`, secondItemEl); 

// const lastItem = allCategory.lastElementChild;
// const lastItemTextEl = lastItem.querySelector(`h2`);
// console.log('Category:', lastItemTextEl.textContent);
// const lastItemEl = lastItem.querySelector(`ul`).children.length;
// console.log(`Elements:`, lastItemEl); 