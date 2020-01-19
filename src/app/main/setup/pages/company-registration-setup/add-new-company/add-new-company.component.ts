import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-add-new-company',
    templateUrl: './add-new-company.component.html',
    styleUrls: ['./add-new-company.component.scss']
})
export class AddNewCompanyComponent implements OnInit {

    form: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private _dialogRef: MatDialogRef<AddNewCompanyComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {
    }

    ngOnInit(): void {
        this.setFormConfig();
        this.setFormData();
    }

    setFormConfig(): void {
        this.form = this._fb.group({
            id: [''],
            name: ['', Validators.required],
            address: ['', Validators.required],
            website: ['', [
                Validators.required,
                Validators.pattern('https?://.+'),
            ]],
        });
    }
    private setFormData(): void {
        if (this.data) {
            this.form.patchValue(this.data.company);
        }
    }


    save(): void {
        this._dialogRef.close(this.form.value);
    }

    close(): void {

    }

}
