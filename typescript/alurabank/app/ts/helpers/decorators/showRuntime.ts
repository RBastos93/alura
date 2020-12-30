export function showRuntime(inSeconds: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            let unity = inSeconds ? 's' : 'ms',
                divider = inSeconds ? 1000 : 1;

            console.log('-----------------------');
            console.log(`Parameters passed to the method ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            console.log(`the method return ${propertyKey} is ${JSON.stringify(originalMethod.apply(this, args))}`);
            const t2 = performance.now();
            console.log(`the ${propertyKey} method took ${(t2 - t1) / divider} ${unity}`);
            return originalMethod.apply(this, args);
        }

        return descriptor;
    }
}