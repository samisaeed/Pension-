import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {SignInComponent} from './pages/sign-in/sign-in.component';

const routes: Routes = [
    {
        path: '',
        component: SignInComponent
    }
];


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      ReactiveFormsModule,
      FlexModule,
      MatCardModule,
      MatSnackBarModule,
      MatProgressSpinnerModule
  ],
    providers: [
    ]
})
export class AuthenticationModule { }
