const Counter = require('./counter');

const start = () => {
    // You can change the value of apples or cakes in this payload to get different result
    const payload = {
        apples: 25,
        cakes: 24,
    };

    const counter = new Counter(payload);
    const boxes = counter.countBoxes();
    const { apples, cakes } = counter.countDetail();

    console.log(`The number of boxes is ${boxes}`);
    console.log(`There are ${apples} apples and ${cakes} cakes in every box`);
};

start();