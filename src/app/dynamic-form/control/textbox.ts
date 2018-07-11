import { BaseControl } from './base-control';

export class Textbox extends BaseControl<string> {
    // this tells which control type should be displayed when we have a list of controls (in dynamic-form-control.component)
    type = 'textbox';
    inputType: string; // e.g. 'text', 'number', 'email',...

    constructor(options: {} = {}) {
        super(options); // pass the options argument into the constructor of the BaseControl class
        this.inputType = options['inputType'] || '';
    }
}
