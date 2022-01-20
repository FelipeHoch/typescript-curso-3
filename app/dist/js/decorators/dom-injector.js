export function domInject(seletor) {
    return function (target, propertKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map