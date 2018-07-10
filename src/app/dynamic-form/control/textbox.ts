import { BaseControl } from './base-control';

export class Textbox extends BaseControl<string> {
    type = 'textbox';
    inputType: string;

    constructor(options: {} = {}) {
        super(options);
        this.inputType = options['inputType'] || '';
    }
}
