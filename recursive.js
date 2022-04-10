// Here is a To-Do app created by DOM element. If You comment all code in recursive.js, you can see the app in browser.

const nodeList = document.querySelectorAll("*");

const changeInnerText = (node) => {
  if (node.innerText) {
    return (node.innerText = `${node.innerText.split(" ").join("")}`);
  }
};

function recursionOnDOM(nodeList, changeInnerText) {
  for (let i = 0; i < nodeList.length; i++) {
    changeInnerText(nodeList[i]);
  }
  return nodeList;
}
console.log(recursionOnDOM(nodeList, changeInnerText));
