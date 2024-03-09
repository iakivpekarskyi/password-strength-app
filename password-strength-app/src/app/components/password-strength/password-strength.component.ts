import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength = ['gray', 'gray', 'gray'];
  inputBorderColor: string = 'gray';

  checkPasswordStrength() {
    const length = this.password.length;
    const hasLetters = /[a-zA-Z]+/.test(this.password);
    const hasNumbers = /\d+/.test(this.password);
    const hasSymbols = /\W+/.test(this.password);

    switch (true) {
      case length === 0:
        this.passwordStrength = ['gray', 'gray', 'gray'];
        break;

      case length < 8:
        this.passwordStrength = ['red', 'gray', 'gray'];
        break;

      case (hasLetters && hasNumbers) ||
        (hasLetters && hasSymbols) ||
        (hasNumbers && hasSymbols):
        if (hasLetters && hasNumbers && hasSymbols) {
          this.passwordStrength = ['green', 'green', 'green'];
        } else {
          this.passwordStrength = ['yellow', 'yellow', 'gray'];
        }
        break;

      default:
        this.passwordStrength = ['red', 'gray', 'gray'];
        break;
    }
    this.inputBorderColor = this.passwordStrength[1];
  }

  resetPassword() {
    this.password = '';
    this.passwordStrength = ['gray', 'gray', 'gray'];
    this.inputBorderColor = 'gray';
  }
}
