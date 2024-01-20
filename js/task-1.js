const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

const categoriesName = document.querySelectorAll("li.item h2");

categoriesName.forEach((category) => {
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${category.nextElementSibling.children.length}`);
});
