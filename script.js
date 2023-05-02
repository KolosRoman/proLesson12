const button = document.getElementById('button');
const title = document.getElementById('title');
const todo = document.getElementById('todo');
const priority = document.getElementById('priority');
const todoContainer = document.getElementById('todo-container');


button.addEventListener('click', () => {
    const todoDiv = document.createElement('div');
    const todoTitle = document.createElement('p');
    const todoItem = document.createElement('p');

    const chack = document.createElement('input');
    chack.setAttribute('type', 'checkbox');

    const basketBlock = document.createElement('div');
    const basket = '<i class="fa-solid fa-trash trash"></i>';
    basketBlock.insertAdjacentHTML('beforeend', basket);
    basketBlock.classList.add('basket');

    todoTitle.innerText = title.value;
    todoItem.innerText = todo.value;
    todoTitle.classList.add('todo-container-title');
    todoItem.classList.add('todo-container-item');

    todoDiv.append(chack, todoTitle, todoItem, basketBlock);
    todoDiv.classList.add('todo-item');

    if(priority.value === 'Low') {
        todoDiv.classList.add('todo-low');
    }else if(priority.value === 'Mid') {
        todoDiv.classList.add('todo-mid');
    }else if(priority.value === 'High') {
        todoDiv.classList.add('todo-high');
    }
    
    todoContainer.append(todoDiv);
    title.value = '';
    todo.value = '';
    priority.value = '';

    chack.addEventListener('change', () => {
        todoTitle.classList.toggle('todo-checked');
        todoItem.classList.toggle('todo-checked');
        basketBlock.classList.toggle('basket');

        if(chack.checked) {
            basketBlock.addEventListener('click', () => {
                todoDiv.remove();
            })
        }
    })
})

