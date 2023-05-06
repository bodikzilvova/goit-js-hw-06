const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`ul`);



ingredients.forEach(function(ingredient){
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");

const allLi = listItem;
list.append(allLi);
});




