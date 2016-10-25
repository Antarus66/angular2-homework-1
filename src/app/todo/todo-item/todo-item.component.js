import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "todo-item",
    templateUrl: 'app/todo/todo-item/todo-item.component.html',
    styleUrls: ['app/todo/todo-item/todo-item.component.css'],
    inputs: ['todo']
})

export class TodoItemComponent {
    @Output() deleted = new EventEmitter();

    delete() {
        this.deleted.emit(this.todo);
    }
}