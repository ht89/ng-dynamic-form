import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BaseControl } from './base-control';

@Injectable()
export class ControlService {

    constructor() { }

    toFormGroup(controls: BaseControl<any>[]) {
        const group: any = [];

        controls.forEach(control => {
            group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
                                                    : new FormControl(control.value || '');
        });

        return new FormGroup(group);
    }
}
