import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { RemoveButtonComponent } from './components/remove-button/remove-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    AddButtonComponent,
    AddModalComponent,
    RemoveButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
