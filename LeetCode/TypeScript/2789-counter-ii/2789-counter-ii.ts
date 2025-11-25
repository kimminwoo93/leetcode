type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let num: number = init;

    return {
        increment: function() {
            return ++num;
        },
        decrement: function() {
            return --num;
        },
        reset: function() {
            num = init; // 초기 값으로 업데이트
            return num;
        }
    }
};

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4