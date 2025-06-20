import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../login-form/login-form.component';

export interface ToDoItem {
  id: number;
  task: string;
  priority: string;
  deadline: Date;
}

@Component({
  selector: 'app-new-task-bar',
  standalone: true,
  imports: [FormsModule, CommonModule, LoginFormComponent],
  templateUrl: './new-task-bar.component.html',
  styleUrls: ['./new-task-bar.component.css'],
})
export class NewTaskBarComponent {
  toDoList: ToDoItem[] = [];
  newTask: string = '';
  newPriority: string = 'Medium';
  newDeadline: string = '';
  accountCreated: boolean = false;
  username: string = '';

  onAccountCreated(event: { created: boolean; username: string }): void {
    this.accountCreated = event.created;
    this.username = event.username;
  }

  addTask(): void {
    if (this.newTask.trim() !== '' && this.newPriority && this.newDeadline) {
      const newToDoItem: ToDoItem = {
        id: Date.now(),
        task: this.newTask.trim(),
        priority: this.newPriority,
        deadline: new Date(this.newDeadline),
      };

      this.toDoList.push(newToDoItem);

      this.newTask = '';
      this.newPriority = 'Medium';
      this.newDeadline = '';
    }
  }
  sortByPriority(): void {
    const priorityOrder: { [key: string]: number } = {
      High: 1,
      Medium: 2,
      Low: 3,
    };

    this.toDoList.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  }

  sortByDeadline(): void {
    this.toDoList.sort(
      (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
    );
  }
}
