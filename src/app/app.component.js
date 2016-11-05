import { Component, Input } from '@angular/core';

@Component({
    selector: "todo-app",
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    constructor() {
        this.title = "Todo list";
        this.todos = [];
    };

    onTodoAdded(todo) {
        this.todos.push(todo);
    }
}