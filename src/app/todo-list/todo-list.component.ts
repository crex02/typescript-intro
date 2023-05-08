import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoArray = ['buy bread', 'pay bills', 'call the plumber'];

  sortArrayAlphabetically(array: string[]): string[]{
    const newArray = [...array];

    newArray.sort((a, b) => a.localeCompare(b));
    return newArray;
  }

  sortTodo():void{
    this.todoArray = this.sortArrayAlphabetically(this.todoArray);
  }
}
