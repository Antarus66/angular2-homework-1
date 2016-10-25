import { Component } from '@angular/core';
import { Todo } from 'app/todo/todo.model.js';

@Component({
    selector: "todo-list",
    templateUrl: 'app/todo/todo-list/todo-list.component.html',
    styleUrls: ['app/todo/todo-list/todo-list.component.css'],
    inputs: ['todos']
})

export class TodoListComponent {
    removeTodo(todo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    removeAll() {
        this.todos.length = 0;
    }

    checkAll(value = false) {
        for (let todo of this.todos) {
            todo.done = value;
        }
    }
}