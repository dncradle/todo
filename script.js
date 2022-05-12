const input = document.querySelector(".input");
const list = document.querySelector(".list");
let todos = [];
let id = 0;

const add = (newTodo) => {
  todo = newTodo;
};
const getAll = () => {
  return todos;
  const addTodos = (text) => {
    const newId = id++;
    const newTodos = getAll().concat({
      id: newId,
      isCompleted: false,
      content: text,
    });
    add(newTodos);
  };
};
