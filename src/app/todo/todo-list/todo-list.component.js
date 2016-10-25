import { Component } from '@angular/core';
import { Todo } from 'app/todo/todo.model.js';

@Component({
    selector: "todo-list",
    templateUrl: 'app/todo/todo-list/todo-list.component.html',
    styleUrls: ['app/todo/todo-list/todo-list.component.css'],
    inputs: ['todos']
})

export class TodoListComponent {
    constructor() {
        let todo = new Todo('Simple deal');
        this.todos = [todo];
    };

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    removeAll() {
        this.todos = [];
    }

    checkAll() {
        for (let todo of this.todos) {
            todo.done = true;
        }
    }
}