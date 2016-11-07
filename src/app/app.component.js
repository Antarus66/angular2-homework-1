import { Component, Input } from '@angular/core';
import { TodoService } from 'app/todo/todo.service';

@Component({
    selector: "todo-app",
    templateUrl: 'app/app.component.html',
    providers: [ TodoService ]
})

export class AppComponent {}