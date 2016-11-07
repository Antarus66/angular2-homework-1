import { Injectable } from '@angular/core';

import { Todo } from 'app/todo/todo.model';

@Injectable()
export class TodoService {
    constructor() {
        this.todos = [
            new Todo('Title1', false),
            new Todo('Title2', true),
            new Todo('Title3', false)
        ];
    }

    getTodo(id: int) {
        return this.todos.find(todo => todo.id == id);
    }

    getAll() {
        return this.todos;
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }
}