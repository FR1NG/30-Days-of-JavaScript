/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let mutable = init;

    return {
        increment: function increment() {
            return ++mutable;
        },
        decrement: function decrement() {
            return --mutable;
        },
        reset: function reset() {
            return mutable = init;
        },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */