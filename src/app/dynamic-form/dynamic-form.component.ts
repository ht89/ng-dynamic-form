import { ControlService } from './control/control.service';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { BaseControl } from './control/base-control';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss'],
    providers: [ControlService]
})
export class DynamicFormComponent implements OnInit {
    @Input() controls: BaseControl<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private cs: ControlService) { }

    ngOnInit() {
        this.form = this.cs.toFormGroup(this.controls);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

}
