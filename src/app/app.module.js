import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component.js';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [ BrowserModule ]
})
export class AppModule {}