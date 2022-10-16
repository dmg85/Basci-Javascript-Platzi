class calculator {
    constructor() {
        this.value1 = 0;
        this.value2 = 0;
    }
    sum(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
        return this.value1 + this.value2;
    }
}

const calTeh = new calculator();
console.log(calTeh.sum(3,2));

import addUser from './module';

console.log(addUser);

