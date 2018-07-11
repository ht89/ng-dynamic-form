import { FormGroup } from '@angular/forms';
import { BaseControl } from '../control/base-control';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-dynamic-form-control',
    templateUrl: './dynamic-form-control.component.html',
    styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent implements OnInit {
    @Input() control: BaseControl<any>;
    @Input() form: FormGroup;

    constructor() { }

    ngOnInit() {
    }

    get isValid() {
        return this.form.controls[this.control.key].valid;
    }

}
