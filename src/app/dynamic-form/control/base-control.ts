export class BaseControl<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    type: string;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        type?: string
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = !options.order ? 1 : options.order;
        this.type = options.type || '';
    }
}
