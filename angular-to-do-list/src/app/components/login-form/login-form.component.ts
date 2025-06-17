import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Account {
  id: number;
  email: string;
  password: string;
  username: string;
}

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  newAccount = {} as Account;
  newEmail: string = '';
  newPassword: string = '';
  newUsername: string = '';

  createAccount(): void {
    if (this.newEmail.trim() !== '' && this.newUsername && this.newPassword) {
      this.newAccount.id = Date.now();
      this.newAccount.email = this.newEmail.trim();
      this.newAccount.password = this.newPassword;
      this.newAccount.username = this.newUsername.trim();
    }
  }
}
