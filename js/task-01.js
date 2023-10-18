const categoryElems = document.querySelectorAll("ul#categories > .item");
console.log(`Number of categories: ${categoryElems.length}`);

categoryElems.forEach((categoryElem) => {
  console.log(`Category:`, categoryElem.firstElementChild.innerText);
  console.log(`Elements: ${categoryElem.querySelectorAll("li").length}`);
});
