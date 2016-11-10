import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'app/todo/todo.model';
import { TodoService } from 'app/todo/todo.service';

@Component({
    selector: "todo-form",
    templateUrl: 'app/todo/todo-list-page/todo-form/todo-form.component.html',
    styleUrls: ['app/todo/todo-list-page/todo-form/todo-form.component.css']
})

export class TodoFormComponent {
    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }

    addTodo(title) {
        if (!title) {
            return;
        }

        let todo = new Todo({title: title});
        this.todoService.addTodo(todo);
    }
}