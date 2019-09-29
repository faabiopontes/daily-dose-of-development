const paragraph = document.createElement('p');
console.log(paragraph);

paragraph.textContent = "I'm a brand new paragraph.";
console.log(paragraph);

paragraph.innerHTML = "I'm a paragraph with <strong>bold</strong> text.";

const text = document.createTextNode("I'm a new text node.");
console.log(text);

// To-do list ul element
const todoList = document.querySelector('ul');

// Create new to-do
const newTodo = document.createElement('li');
newTodo.textContent = 'Do homework';

// Add new todo to the end of the list
todoList.appendChild(newTodo);

// Create new to-do
const anotherTodo = document.createElement('li');
anotherTodo.textContent = 'Pay bills';

// parentNode.insertBefore(newNode, nextSibling);
// Add new to-do to the beginning of the list
todoList.insertBefore(anotherTodo, todoList.firstElementChild);

const modifiedTodo = document.createElement('li');
modifiedTodo.textContent = 'Feed the dog';

// parentNode.replaceChild(newNode, oldNode);
// Replace existing to-do with modified to-do
todoList.replaceChild(modifiedTodo, todoList.children[2]);

todoList.removeChild(todoList.lastElementChild);

// Remove second element child from todoList
todoList.children[1].remove();
