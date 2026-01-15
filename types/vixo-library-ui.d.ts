import * as i0 from '@angular/core';

declare class VixoBalanceUI {
    total: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<VixoBalanceUI, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VixoBalanceUI, "vixo-balance-ui", never, { "total": { "alias": "total"; "required": false; }; }, {}, never, never, true, never>;
}

interface RecordModalI {
    icon?: string;
    name: string;
    category: string;
    amount: number;
    type: string;
}

declare class RecordModalComponent {
    data: RecordModalI;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecordModalComponent, "vixo-record-modal-ui", never, { "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}

export { RecordModalComponent, VixoBalanceUI };
export type { RecordModalI };
