class Todo {
    constructor() {
        this.check = document.querySelector('#check');
        this.all = document.querySelector('#all');
        this.active = document.querySelector('#active');
        this.completed = document.querySelector('#completed');
        this.sun = document.querySelector('#sun');
        this.moon = document.querySelector('#moon');
        this.clear = document.querySelector('#clear');
        this.btn = document.querySelector('#btn');
        this.body = document.querySelector('body');
        this.ul = document.getElementById('ul');
        
        this.init();
        this.loadTodos();
        this.clearCompleted();
    }

    init() {
        this.body.addEventListener('click', () => {
            this.itemsLeft();
        });
        this.all.addEventListener('click', () => {
            this.filterAll();
        });
        this.active.addEventListener('click', () => {
            this.filterActive();
        });
        this.completed.addEventListener('click', () => {
            this.filterCompleted();
        });
        this.check.addEventListener('click', () => {
            this.newTodo();
        });
        this.sun.classList.toggle('none');
        this.btn.addEventListener('click', () => {
            this.moon.classList.toggle('none');
            this.sun.classList.toggle('none');
            this.darkMode();
        });
    }

    saveTodos() {
        const todos = [];
        document.querySelectorAll('.li').forEach(li => {
            const todo = {
                text: li.querySelector('input').value,
                completed: li.querySelector('.btn img').classList.contains('active')
            };
            todos.push(todo);
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            this.createTodoElement(todo.text, todo.completed);
        });
        this.itemsLeft();
    }

    createTodoElement(text, completed = false) {
        let ul = document.querySelector('#ul');
        let li = document.createElement('li');
        let inputText = document.createElement('input');
        let button = document.createElement('button');
        let imgCross = document.createElement('img');
        let imgCheckColor = document.createElement('img');

        inputText.classList.add('inputs');
        inputText.type = 'text';
        inputText.value = text;
        button.type = 'button';
        button.classList.add('btn');
        imgCross.src = './images/icon-cross.svg';
        imgCross.classList.add('cross');
        imgCross.alt = 'icon-cross.svg';
        li.classList.add('li');
        inputText.draggable = 'true';
        inputText.setAttribute('ondragstart', 'onDragStart(event)');
        ul.appendChild(li);
        li.appendChild(button);
        li.appendChild(inputText);
        li.appendChild(imgCross);
        button.appendChild(imgCheckColor);

        if (completed) {
            imgCheckColor.classList.add('active');
            button.classList.add('check');
            imgCheckColor.src = './images/icon-check.svg';
            imgCheckColor.style.marginLeft = '5.5px';
            inputText.classList.add('lineThrough');
        }

        button.addEventListener('click', () => {
            imgCheckColor.classList.toggle('active');
            button.classList.toggle('check');
            imgCheckColor.src = imgCheckColor.classList.contains('active') ? './images/icon-check.svg' : '';
            imgCheckColor.style.marginLeft = imgCheckColor.classList.contains('active') ? '5.5px' : '';
            inputText.classList.toggle('lineThrough');
            this.saveTodos();
        });

        imgCross.addEventListener('click', () => {
            li.remove();
            this.saveTodos();
            this.itemsLeft();
        });

        this.saveTodos();
        this.itemsLeft();
    }

    newTodo() {
        const inputCreate = document.querySelector('input').value;
        if (inputCreate.length > 0) {
            this.createTodoElement(inputCreate);
            document.querySelector('input').value = '';
        }
    }

    clearCompleted() {
        this.clear.addEventListener('click', () => {
            document.querySelectorAll('.lineThrough').forEach(input => {
                input.parentElement.remove();
            });
            this.saveTodos();
            this.itemsLeft();
        });
    }

    itemsLeft() {
        const todoListLength = document.querySelectorAll('.li').length;
        const lineThrough = document.querySelectorAll('.lineThrough').length;
        const calItem = todoListLength - lineThrough;
        document.querySelector('#items').innerHTML = `${calItem} items left`;
    }

    filterAll() {
        document.querySelectorAll('.li').forEach(li => {
            li.style.display = '';
        });
    }

    filterActive() {
        document.querySelectorAll('.li').forEach(li => {
            if (li.querySelector('.btn img').classList.contains('active')) {
                li.style.display = 'none';
            } else {
                li.style.display = '';
            }
        });
    }

    filterCompleted() {
        document.querySelectorAll('.li').forEach(li => {
            if (!li.querySelector('.btn img').classList.contains('active')) {
                li.style.display = 'none';
            } else {
                li.style.display = '';
            }
        });
    }

    darkMode() {
        document.querySelector('body').classList.toggle('darkmodeBody');
        document.querySelector('#input').classList.toggle('darkmode');
        document.querySelector('.countainer').classList.toggle('darkmode');
        document.querySelector('.div').classList.toggle('darkmode');
        document.querySelector('footer').classList.toggle('footer');
        document.querySelectorAll(' li ,.inputs').forEach(input => {
            input.classList.toggle('darkmodeInput');
        });
    }
}

const todo = new Todo();
