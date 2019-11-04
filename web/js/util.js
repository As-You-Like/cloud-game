/**
 * Utility module.
 * @version 1
 */
const util = (() => {
    return {
        /**
         * A decorator that passes the call to function at maximum once per specified milliseconds.
         * @param f The function to call.
         * @param ms The amount of time in milliseconds to ignore the function calls.
         * @returns {Function}
         * @example
         * const showMessage = () => { alert('00001'); }
         * const showOnlyOnceASecond = debounce(showMessage, 1000);
         */
        debounce: (f, ms) => {
            let wait = false;

            return function () {
                if (wait) return;

                f.apply(this, arguments);
                wait = true;
                setTimeout(() => wait = false, ms);
            };
        }
    }
})();
