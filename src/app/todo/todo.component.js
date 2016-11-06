import { Component, Input } from '@angular/core';

@Component({
    selector: "todo",
    templateUrl: 'app/todo/todo.component.html',
    styleUrls: ['app/todo/todo.component.css']
})

export class TodoComponent {
    constructor() {
        this.title = "Todo list";
        this.todos = [];
    };

    onTodoAdded(todo) {
        this.todos.push(todo);
    }
}