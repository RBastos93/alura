export function throttle(time: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        let timer = 0;

        descriptor.value = function(...args: any[]) {
            window.event && window.event.preventDefault();

            clearInterval(timer);
            timer = setTimeout(() => originalMethod.apply(this, args), time);
        }

        return descriptor;
    }
}