import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyRegistrationSetupComponent} from './company-registration-setup.component';
import {RouterModule, Routes} from '@angular/router';
import {LoaderModule} from '../../../../shared/components/loader/loader.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AddNewCompanyComponent } from './add-new-company/add-new-company.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {NoDataFoundModule} from '../../../../shared/components/no-data-found/no-data-found.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FuseConfirmDialogModule} from '../../../../../@fuse/components';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SnackbarService} from '../../../../shared/services/snackbar service/snackbar.service';

const routes: Routes = [
    {
        path: '',
        component: CompanyRegistrationSetupComponent
    }
];

@NgModule({
    declarations: [CompanyRegistrationSetupComponent, AddNewCompanyComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTableModule,
        FlexModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatSortModule,
        MatInputModule,
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
        AddNewCompanyComponent
    ],
    providers: [
        SnackbarService
    ],
})
export class CompanyRegistrationSetupModule {
}
