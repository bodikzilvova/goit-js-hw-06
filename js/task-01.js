
const allCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, allCategories.length);

allCategories.forEach(function (category){
console.log(`Category:`, category.firstElementChild.textContent,
`Elements:`, category.lastElementChild.children.length);
});
