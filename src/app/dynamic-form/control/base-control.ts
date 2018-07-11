/*
    define the common properties that every control needs
*/
export class BaseControl<T> {
    value: T; // the value is of generic type because each control can have a different type
    key: string;
    label: string;
    required: boolean;
    order: number;
    type: string;

    // show people how the options argument is passed (in app.component)
    // have to make every object property optional (?) because we set the options parameter to an empty object by default
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        type?: string
    } = {}) {
        // we assign the properties of the options argument to the properties of the class
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required; // coerce the value into a boolean (e.g. undefined -> false)
        this.order = !options.order ? 1 : options.order;
        this.type = options.type || '';
    }
}
