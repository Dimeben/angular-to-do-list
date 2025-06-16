import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface ToDoItem {
  id: number;
  task: string;
  priority: string;
  deadline: Date;
}

@Component({
  selector: 'app-new-task-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task-bar.component.html',
  styleUrls: ['./new-task-bar.component.css']
})
export class NewTaskBarComponent {
  toDoList: ToDoItem[] = [];
  newTask: string = '';
  newPriority: string = 'medium';
  newDeadline: string = '';

  addTask(): void {
    if (this.newTask.trim() !== '' && this.newPriority) {
      const newToDoItem: ToDoItem = {
        id: Date.now(),
        task: this.newTask.trim(),
        priority: this.newPriority,
        deadline: new Date(this.newDeadline)
      };

      this.toDoList.push(newToDoItem);

      this.newTask = '';
      this.newPriority = 'medium';
      this.newDeadline = '';
    }
  }
}