import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import {FuseConfirmDialogModule} from '../../../@fuse/components';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoDataFoundModule} from '../../shared/components/no-data-found/no-data-found.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoaderModule} from '../../shared/components/loader/loader.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FuseConfirmDialogComponent} from "../../../@fuse/components/confirm-dialog/confirm-dialog.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SetupRoutingModule,
      FuseConfirmDialogModule,
      MatCheckboxModule,
      MatButtonModule,
      MatDialogModule,
      MatSelectModule,
      MatIconModule,
      FormsModule,
      ReactiveFormsModule,
      MatSnackBarModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatDatepickerModule,
      LoaderModule,
      NoDataFoundModule,
      MatTooltipModule
  ],
    entryComponents: [
        FuseConfirmDialogComponent,
    ],
})
export class SetupModule { }
