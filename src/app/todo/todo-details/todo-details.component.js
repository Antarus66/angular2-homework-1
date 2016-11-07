import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from 'app/todo/todo.service';

@Component({
    selector: "todo-details",
    templateUrl: 'app/todo/todo-details/todo-details.component.html'
})

export class TodoDetailsComponent {
    constructor(
        todoService: TodoService,
        router: Router,
        route: ActivatedRoute
    ) {
        this.todoService = todoService;
        this.router = router;
        this.route = route;
        this.todo = {};
    }

    ngOnInit() {
        let params = this.route.params.getValue();
        let id = params.id;

        this.todo = this.todoService.getTodo(id);
    }
}