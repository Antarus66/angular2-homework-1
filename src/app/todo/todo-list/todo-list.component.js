import { Component } from '@angular/core';
import { TodoService } from 'app/todo/todo.service';

@Component({
    selector: "todo-list",
    templateUrl: 'app/todo/todo-list/todo-list.component.html',
    styleUrls: ['app/todo/todo-list/todo-list.component.css']
})

export class TodoListComponent {
    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }

    ngOnInit() {
        this.todos = this.todoService.getAll();
    }

    onTodoDeleted(todo) {
        let id = todo.id;

        try {
            this.todoService.deleteTodo(id);
            let index = this.todos.indexOf(todo);

            if (index > -1) {
                this.todos.splice(index, 1);
            }
        } catch (e) {
            console.error('Cannot remove the todo with id: ' + id);
        }
    }

    removeAll() {
        try {
            this.todoService.deleteAll();
            this.todos.length = 0;
        } catch (e) {
            alert(e.message);
        }


    }

    checkAll(value = false) {
        for (let todo of this.todos) {
            todo.done = value;
        }
    }
}