import { Component, OnInit, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms'

export interface ToDoItem{
  id:number;
  task:string;
  priority:string;
  deadline:Date;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "app-component"

toDoList : ToDoItem [] = [];
newTask:string = '';
newPriority:string = '';
newDeadline:number = Date.now();

addTask():void{
  if(this.newTask.trim() !== '' || !this.newPriority){
    const newToDoItem:ToDoItem = {
      id: Date.now(),
      task: this.newTask.trim(),
      priority: this.newPriority,
      deadline: new Date(this.newDeadline)
    }

    this.newTask = '';
    this.newPriority = 'medium';
    this.newDeadline = Date.now();
  }
}


}
