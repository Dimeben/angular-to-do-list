import { Component, OnInit, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms'
import { NewTaskBarComponent } from './components/new-task-bar/new-task-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ViewBarComponent } from './components/view-bar/view-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HeaderComponent, NewTaskBarComponent, LoginFormComponent, ViewBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "app-component"

}
