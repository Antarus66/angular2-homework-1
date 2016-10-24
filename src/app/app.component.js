import { Component } from '@angular/core';

@Component({
    selector: "todo-app",
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    constructor() {
       this.title = "Todo list";
       this.todos = new Set();
    };

    addTodo(input) {
        let title = input.value;
        input.value = '';
        this.todos.add({
            title,
            checked: false,

            get done() {
                return this.checked;
            },

            set done(val) {
                if (val) {
                    alert('Cool!')
                } else {
                    alert('Fool!');
                }

                this.checked = val;
            }
        });
    }

    removeTodo(todo) {
        this.todos.delete(todo);
    }
}