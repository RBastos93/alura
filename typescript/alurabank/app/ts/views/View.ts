import { showRuntime } from "../helpers/decorators/index";

export abstract class View<T> {

    private _element: JQuery;

    constructor(selector: string, private escape?: boolean) {
        this._element = $(selector);
    }

    @showRuntime()
    update(model: T): void {
        let template = this.template(model);

        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '')
        }

        this._element.html(template);
    }

    abstract template(model: T): string;
}