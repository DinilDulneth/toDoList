const todolist = [];

function addTodo()
{
    const inputTodo = document.querySelector('.js-name-input');
    const name = inputTodo.value;

    todolist.push(name);
    console.log(todolist);

    document.getElementById('output').innerHTML=`${todolist}`;

    inputTodo.value = '';
}