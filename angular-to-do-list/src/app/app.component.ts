import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { NewTaskBarComponent } from './components/new-task-bar/new-task-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    HeaderComponent,
    NewTaskBarComponent,
    LoginFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'app-component';
}
