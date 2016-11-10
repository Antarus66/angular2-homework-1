import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { Todo } from 'app/todo/todo.model';

@Injectable()
export class TodoService {
    constructor(http: Http) {
        this.http = http;
    }

    getTodo(id) {
        return this.todos.find(todo => todo.id == id);
    }

    getAll() {
        return this.http.get('/todos')
            .map(this.loadTodoCollection.bind(this))
            .catch(this.handleError);
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }

    deleteTodo(id) {
        this.todos.filter(todo => todo.id !== id);
    }

    deleteAll() {
        throw new Error('Cannot remove all the items');
    }

    loadTodoCollection(res) {
        let data = res.json();
        let todos = data.map(todo => new Todo(todo));
        this.todos = todos;

        return todos;
    }

    handleError(error) {
        console.log("Error", error);
        return Observable.throw(error.message || error);
    }
}