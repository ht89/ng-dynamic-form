import { QuestionControlService } from './control/question-control.service';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from './control/question-base';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss'],
    providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService) { }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

}
