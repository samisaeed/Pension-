import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

    errorSnackBar(message): void {
        this._snackBar.open(message, 'close', {
            panelClass: ['error-snackbar'],
            duration: 55000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
        });
    }
    successSnackBar(message): void {
        this._snackBar.open(message, 'close', {
            panelClass: ['success-snackbar'],
            duration: 55000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
        });
    }
}
