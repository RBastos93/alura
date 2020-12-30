export function domInject(selector: string) {
    return function(target: any, propertyKey: string) {
        let element: JQuery;

        const getter = function() {
            if (!element) {
                element = $(selector);
                console.log(element);
            };

            return element;
        }

        Object.defineProperty(target, propertyKey, {
            get: getter
        })
    }
}