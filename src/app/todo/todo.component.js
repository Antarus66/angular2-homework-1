import { Component, Input } from '@angular/core';
import { TodoService } from 'app/todo/todo.service';

@Component({
    selector: "todo",
    templateUrl: 'app/todo/todo.component.html',
    styleUrls: ['app/todo/todo.component.css']
})

export class TodoComponent {
    constructor(todoService: TodoService) {
        this.todoService = todoService;
    };

    ngOnInit() {
        this.todos = this.todoService.getAll();
    }

    onTodoAdded(todo) {
        this.todoService.addTodo(todo);
    }

}