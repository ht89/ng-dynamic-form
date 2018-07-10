import { BaseControl } from './base-control';

export class Dropdown extends BaseControl<string> {
    type = 'dropdown';
    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
