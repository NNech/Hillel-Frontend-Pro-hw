const ul = document.querySelector("#list");
const input = document.querySelector("#inputmessage");
const btn = document.querySelector("#btn");

btn.addEventListener("click", onButtonClick);

//createElem(msg);

function onButtonClick() {
  let msg = inputMessage();
  if (msg == "") {
    return;
  }

  createElem(msg);
  input.value = "";
}

function createElem(msg) {
  let li = document.createElement("li");
  li.textContent = msg;
  ul.append(li);
}

function inputMessage() {
  return input.value;
}
