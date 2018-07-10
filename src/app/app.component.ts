import { Component } from '@angular/core';
import { BaseControl } from './dynamic-form/control/base-control';
import { Dropdown } from './dynamic-form/control/dropdown';
import { Textbox } from './dynamic-form/control/textbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    controls: any[];

    constructor() {
        const controls: BaseControl<any>[] = [
            new Dropdown({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    {
                        key: 'solid',
                        value: 'Solid'
                    },
                    {
                        key: 'great',
                        value: 'Great'
                    },
                    {
                        key: 'good',
                        value: 'Good'
                    },
                    {
                        key: 'unproven',
                        value: 'Unproven'
                    }
                ],
                order: 3
            }),

            new Textbox({
                key: 'firstName',
                label: 'First Name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new Textbox({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];

        this.controls = controls.sort((a, b) => a.order - b.order);
    }
}
