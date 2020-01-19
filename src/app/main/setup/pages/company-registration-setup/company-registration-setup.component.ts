import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Subject} from 'rxjs';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../../authentication/services/auth/auth.service';
import {AddNewCompanyComponent} from './add-new-company/add-new-company.component';
import {CompanyRegistrationData} from '../../models/company-registration.model';
import {CompanyRegistrationService} from '../../services/company-registration/company-registration.service';
import {takeUntil} from 'rxjs/operators';
import {SnackbarService} from '../../../../shared/services/snackbar service/snackbar.service';
import {FuseConfirmDialogComponent} from '../../../../../@fuse/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-company-registration-setup',
  templateUrl: './company-registration-setup.component.html',
  styleUrls: ['./company-registration-setup.component.scss']
})
export class CompanyRegistrationSetupComponent implements OnInit , OnDestroy{

    isLoading: boolean;
    displayedColumns: string[] = ['name', 'address', 'email_address', 'website', 'actions' ];

    private _companyData: CompanyRegistrationData[] = [];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    private unsubscribeAll = new Subject();

    constructor(public dialog: MatDialog,
                private readonly _authService: AuthService,
                private readonly _companyService: CompanyRegistrationService,
                private _snackService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllCompanies();
    }

    getAllCompanies(): void {
        this.isLoading = true;

        this._companyService.getAll()
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe(response => {
                this._companyData = response.results;
                this.dataSource = new MatTableDataSource(this._companyData);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;

                this.isLoading = false;
            });
    }

    applyFilter(filterValue: string): void {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openDialog(): void{
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        const dialogRef = this.dialog.open(AddNewCompanyComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.addNewCompany(data);
            }
        });
    }
    addNewCompany(data): void {
        this.isLoading = true;
        this._companyService.create(data).subscribe(res => {
            this.isLoading = false;
            this._companyData.unshift(res);
            this.dataSource = new MatTableDataSource(this._companyData);
            this._snackService.successSnackBar('New Company added successfully');
        });
    }
    onEdit(row: CompanyRegistrationData): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        dialogConfig.data = {company: row};
        const dialogRef = this.dialog.open(AddNewCompanyComponent, dialogConfig);
        this.updateCompany(dialogRef);
    }
    updateCompany(dialogRef: MatDialogRef<AddNewCompanyComponent, any>): void {
        dialogRef.afterClosed().subscribe(data => {
            this._companyService.update(data).subscribe(res => {
                // this.getAllCompanies();
                this.dataSource = new MatTableDataSource(this._companyData);
                this._snackService.successSnackBar('Company updated successfully');
            });
        });
    }



    onDelete(row: any): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.data = {
            confirmMessage: 'Are you sure you want to delete?'
        };
        this.dialog.open(FuseConfirmDialogComponent, dialogConfig).afterClosed()
            .subscribe((confirmed: boolean) => {
                this.isLoading = true;
                if (confirmed) {
                    this._companyService.delete(row.id)
                        .subscribe(res => {
                            this._companyData = this._companyData.filter(companyData => companyData.id !== row.id);
                            this.dataSource = new MatTableDataSource(this._companyData);
                            this.isLoading = false;
                            this._snackService.successSnackBar('Company deleted successfully');
                        });
                }
            });
    }
    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
}
