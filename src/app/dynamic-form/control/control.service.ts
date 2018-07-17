import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BaseControl } from './base-control';

@Injectable()
export class ControlService {

    constructor(private fb: FormBuilder) { }

    
        // convert all controls into FormControls & store them in a FormGroup

        // a normal form is defined like this:

        // this.myForm = this.fb.group({
        //     name: ['', [Validators.required, Validators.minLength(5)]],
        //     address: this.fb.group({
        //         street: ['', <any>Validators.required],
        //         postcode: ['']
        //     })
        // });
    

    toFormGroup(controls: BaseControl<any>[]) {
        const group: any = [];

        controls.forEach(control => {
            group[control.key] = control.required
                ? [control.value || '', Validators.required]
                : [control.value || ''];
        });

        return this.fb.group(group);
    }
}
