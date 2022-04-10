const body = document.body;

const first = document.createElement("div");
const second = document.createElement("div");
first.append(second);
first.classList.add("first");
second.classList.add("second");

body.append(first);

const paragraph1 = document.createElement("p");

const paragraph2 = document.createElement("div");

const myToDOList = document.createElement("p");
myToDOList.classList.add("MyToDoList");
myToDOList.innerText = "My To-Do list";
paragraph2.insertAdjacentElement("afterbegin", myToDOList);

second.append(paragraph2);

const inputArea = document.createElement("div");
inputArea.classList.add("inputArea");
const inputer = document.createElement("input");
inputer.classList.add("inputer");
inputer.placeholder = "type here";
const btn = document.createElement("button");
btn.textContent = "Add";
inputArea.append(btn);
btn.before(inputer);
paragraph2.after(inputArea);

const dropDown = document.createElement("div");
dropDown.classList.add("drop");
dropDown.textContent = "DropDown▼";
btn.after(dropDown);

const drop1 = document.createElement("div");
drop1.classList.add("drop1");
drop1.innerHTML = `
<ul id="test">
  <li> <a class="dropdown-item" href="#">Important</a></li>
  <li><a class="dropdown-item" href="#">Easy</a> </li>
  <li><a class="dropdown-item" href="#">Error</a> </li>
  <li><a class="dropdown-item" href="#">Hello word</a> </li>
</ul>
`;

inputArea.after(drop1);

dropDown.addEventListener("mouseover", () => {
  drop1.style.display = "block";
});
dropDown.addEventListener("mouseleave", () => {
  drop1.style.display = "none";
});

inputer.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const toDo = document.createElement("div");
    toDo.classList.add("toDo");
    inputArea.after(toDo);
    const textInToDO = document.createElement("p");
    textInToDO.textContent = inputer.value;
    if (inputer.value) {
      toDo.append(textInToDO);
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      toDo.append(removeBtn);
      removeBtn.addEventListener("click", () => {
        toDo.remove();
      });
    }
  }
});

btn.addEventListener("click", () => {
  const toDo = document.createElement("div");
  toDo.classList.add("toDo");
  inputArea.after(toDo);
  const textInToDO = document.createElement("p");
  textInToDO.textContent = inputer.value;
  if (inputer.value) {
    toDo.append(textInToDO);
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    toDo.append(removeBtn);
    removeBtn.addEventListener("click", () => {
      toDo.remove();
    });
  }
});

