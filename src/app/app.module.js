import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoService } from './todo/todo.service';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
      AppComponent,
      TodoComponent,
      TodoListComponent,
      TodoFormComponent,
      TodoItemComponent,
      TodoDetailsComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([
          {
              path: 'todo-details/:id',
              component: TodoDetailsComponent
          }, {
              path: '',
              component: TodoComponent
          }, {
              path: '**',
              component: TodoComponent
          }
      ])
  ]
})

export class AppModule {}