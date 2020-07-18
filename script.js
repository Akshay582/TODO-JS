let todos = [
    {
        todo: "Wake up at 5am"
    },
    {
        todo: "Learn how to use Vue.js"
    },
    {
        todo: "Drink coffee"
    },
];

// append the todos to the ul with id "list"

let i;
let count;

const myList = document.getElementById( 'list' );

for ( i = 0; i < todos.length; i++ ) {
    let newLI = document.createElement( 'li' );
    newLI.setAttribute( "id", `l${i}` );
    const { todo } = todos[ i ];
    newLI.innerHTML = ` <input type="checkbox" name="tasks" /><label class="strikethrough"> ${todo}</label><button onClick="deleteTodo(this.id)" id=${i}><i class="far fa-trash-alt fa-2x"></i></button>`;
    myList.appendChild( newLI );
}

count = i;

// take input from the user and add it to the list

const myForm = document.getElementById( 'todo-input' );
const tasksCount = document.getElementById( 'p-left' );

tasksCount.innerHTML = `<strong>${count}</strong> tasks left`

function addTodo( event ) {
    event.preventDefault();
    let newLI = document.createElement( 'li' );
    newLI.setAttribute( "id", `l${i}` );
    newLI.innerHTML = ` <input type="checkbox"/><label class="strikethrough"> ${myForm.value}</label> <button onClick="deleteTodo(this.id)"id=${i++}><i class="far fa-trash-alt fa-2x"></i></button>`;
    myList.appendChild( newLI );
    tasksCount.innerHTML = `<strong>${++count}</strong> task(s) left`
    myForm.value = '';
}

function deleteTodo( id ) {
    const toDelete = document.getElementById( `l${id}` );
    toDelete.remove();
    tasksCount.innerHTML = `<strong>${--count}</strong> task(s) left`
}