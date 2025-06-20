import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Account {
  id: number;
  email: string;
  password: string;
  username: string;
}

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  newAccount = {} as Account;
  newEmail: string = '';
  newPassword: string = '';
  newUsername: string = '';
  accountCreated: boolean = false;
  passwordValidator: RegExp = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  submitPressed: boolean = false;
  validPassword: boolean = false;

  createAccount(): void {
    if (this.newEmail.trim() && this.newPassword && this.newUsername.trim()) {
      this.validPassword = this.passwordValidator.test(this.newPassword);
      this.submitPressed = true;
      if (this.validPassword) {
        this.newAccount.id = Date.now();
        this.newAccount.email = this.newEmail.trim();
        this.newAccount.password = this.newPassword;
        this.newAccount.username = this.newUsername.trim();

        this.accountCreated = true;
        this.newEmail = '';
        this.newPassword = '';
        this.newUsername = '';
      }
    }
  }

  showUsername() {
    return this.newAccount.username;
  }
}
