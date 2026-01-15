import { CurrencyPipe, NgClass } from '@angular/common';
import * as i0 from '@angular/core';
import { Input, Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardTitleGroup } from '@angular/material/card';
import * as i1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i5 from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i4 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i6 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

class VixoBalanceUI {
    total = 0;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.0", ngImport: i0, type: VixoBalanceUI, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.0", type: VixoBalanceUI, isStandalone: true, selector: "vixo-balance-ui", inputs: { total: "total" }, ngImport: i0, template: "<h2 style=\"text-align: center;\">Balance: {{total | currency:'MXN'}}</h2>\n  ", styles: [""], dependencies: [{ kind: "pipe", type: CurrencyPipe, name: "currency" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.0", ngImport: i0, type: VixoBalanceUI, decorators: [{
            type: Component,
            args: [{ selector: 'vixo-balance-ui', standalone: true, imports: [CurrencyPipe], template: "<h2 style=\"text-align: center;\">Balance: {{total | currency:'MXN'}}</h2>\n  " }]
        }], propDecorators: { total: [{
                type: Input
            }] } });

class RecordModalComponent {
    data;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.0", ngImport: i0, type: RecordModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.0", type: RecordModalComponent, isStandalone: true, selector: "vixo-record-modal-ui", inputs: { data: "data" }, ngImport: i0, template: "<mat-card [ngClass]=\"data.type\" appearance=\"outlined\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>{{data.name}}</mat-card-title>\n      <mat-card-subtitle>{{data.category}}</mat-card-subtitle>\n      <p>{{data.type === 'expense' ? '-' : ''}}{{data.amount | currency:'MXN':'$'}}</p>\n    </mat-card-title-group>\n  </mat-card-header>\n</mat-card>\n\n", styles: [".income{background-color:#90ee90}.expense{background-color:#ee4b0aa1}\n"], dependencies: [{ kind: "component", type: MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "component", type: MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "directive", type: MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "component", type: MatCardTitleGroup, selector: "mat-card-title-group" }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: CurrencyPipe, name: "currency" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.0", ngImport: i0, type: RecordModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vixo-record-modal-ui', imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardTitleGroup, NgClass, CurrencyPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-card [ngClass]=\"data.type\" appearance=\"outlined\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>{{data.name}}</mat-card-title>\n      <mat-card-subtitle>{{data.category}}</mat-card-subtitle>\n      <p>{{data.type === 'expense' ? '-' : ''}}{{data.amount | currency:'MXN':'$'}}</p>\n    </mat-card-title-group>\n  </mat-card-header>\n</mat-card>\n\n", styles: [".income{background-color:#90ee90}.expense{background-color:#ee4b0aa1}\n"] }]
        }], propDecorators: { data: [{
                type: Input,
                args: ['data']
            }] } });

class AddRecordContentComponent {
    fb;
    dialogRef = inject((MatDialogRef));
    data = inject(MAT_DIALOG_DATA);
    formData;
    constructor(fb) {
        this.fb = fb;
        this.formData = this.fb.group({
            name: [''],
            category: [''],
            amount: [''],
            type: ['expense']
        });
    }
    onCancelButtonClick() {
        this.dialogRef.close();
    }
    onAddButtonClick() {
        this.dialogRef.close(this.formData.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.0", ngImport: i0, type: AddRecordContentComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.0", type: AddRecordContentComponent, isStandalone: true, selector: "vixo-add-record-form-content-ui", ngImport: i0, template: "<mat-dialog-content>\n  <div class=\"container-add-record\" [formGroup]=\"formData\">\n    <mat-form-field class=\"form-group-add-record\">\n      <mat-label>Name</mat-label>\n      <input matInput formControlName=\"name\">\n    </mat-form-field>\n    <mat-form-field class=\"form-group-add-record\">\n      <mat-label>Category</mat-label>\n      <input matInput formControlName=\"category\">\n    </mat-form-field>\n    <mat-form-field floatLabel=\"always\" class=\"form-group-add-record\">\n      <mat-label>Amount</mat-label>\n      <input matInput type=\"number\" step=\"0.1\" style=\"text-align: end;\" placeholder=\"0\" formControlName=\"amount\" />\n      <span matTextPrefix>$&nbsp;</span>\n    </mat-form-field>\n    <mat-radio-group formControlName=\"type\" class=\"form-group-add-record\">\n      <mat-radio-button value=\"expense\">Expense</mat-radio-button>\n      <mat-radio-button value=\"income\">Income</mat-radio-button>\n    </mat-radio-group>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button (click)=\"onCancelButtonClick()\">Cancel</button>\n  <button mat-button (click)=\"onAddButtonClick()\">Add</button>\n</mat-dialog-actions>\n", styles: [".container-add-record>.form-group-add-record{display:block}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i4.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i4.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i5.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i5.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i6.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.0", ngImport: i0, type: AddRecordContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vixo-add-record-form-content-ui', imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        MatRadioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatDialogModule,
                        MatButtonModule
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-dialog-content>\n  <div class=\"container-add-record\" [formGroup]=\"formData\">\n    <mat-form-field class=\"form-group-add-record\">\n      <mat-label>Name</mat-label>\n      <input matInput formControlName=\"name\">\n    </mat-form-field>\n    <mat-form-field class=\"form-group-add-record\">\n      <mat-label>Category</mat-label>\n      <input matInput formControlName=\"category\">\n    </mat-form-field>\n    <mat-form-field floatLabel=\"always\" class=\"form-group-add-record\">\n      <mat-label>Amount</mat-label>\n      <input matInput type=\"number\" step=\"0.1\" style=\"text-align: end;\" placeholder=\"0\" formControlName=\"amount\" />\n      <span matTextPrefix>$&nbsp;</span>\n    </mat-form-field>\n    <mat-radio-group formControlName=\"type\" class=\"form-group-add-record\">\n      <mat-radio-button value=\"expense\">Expense</mat-radio-button>\n      <mat-radio-button value=\"income\">Income</mat-radio-button>\n    </mat-radio-group>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button (click)=\"onCancelButtonClick()\">Cancel</button>\n  <button mat-button (click)=\"onAddButtonClick()\">Add</button>\n</mat-dialog-actions>\n", styles: [".container-add-record>.form-group-add-record{display:block}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }] });

/*
 * Public API Surface of library-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddRecordContentComponent, RecordModalComponent, VixoBalanceUI };
//# sourceMappingURL=vixo-library-ui.mjs.map
