import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "todo-item",
    templateUrl: 'app/todo/todo-list-page/todo-item/todo-item.component.html',
    styleUrls: ['app/todo/todo-list-page/todo-item/todo-item.component.css'],
    inputs: ['todo']
})

export class TodoItemComponent {
    @Output() deleted = new EventEmitter();

    constructor(router: Router) {
        this.router = router;
    }

    delete() {
        this.deleted.emit(this.todo);
    }

    details() {
        this.router.navigate(['/todo-details', this.todo.id])
    }
}