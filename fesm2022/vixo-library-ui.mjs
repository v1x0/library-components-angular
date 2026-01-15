import { CurrencyPipe, NgClass } from '@angular/common';
import * as i0 from '@angular/core';
import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardTitleGroup } from '@angular/material/card';

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

/*
 * Public API Surface of library-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RecordModalComponent, VixoBalanceUI };
//# sourceMappingURL=vixo-library-ui.mjs.map
