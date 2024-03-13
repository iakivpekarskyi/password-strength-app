import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PasswordStrengthService {
  calculateStrength(password: string): string[] {
    const length = password.length;
    const hasLetters = /[a-zA-Z]+/.test(password);
    const hasNumbers = /\d+/.test(password);
    const hasSymbols = /\W+/.test(password);

    if (length === 0) return ['gray', 'gray', 'gray'];
    if (length < 8) return ['red', 'gray', 'gray'];
    if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) {
      return hasLetters && hasNumbers && hasSymbols
        ? ['green', 'green', 'green']
        : ['yellow', 'yellow', 'gray'];
    }
    return ['red', 'gray', 'gray'];
  }
}
