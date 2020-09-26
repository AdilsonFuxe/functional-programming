class Greemlin {
    constructor(power) {
        this.power = power
    }

    kill(greemlin) {
        this.power += greemlin.power;
        return this;
    }

    eat(greemlin) {
        this.power *= greemlin.power;
        return this;
    }
}

const small = new Greemlin(0);
const mid = new Greemlin(2);
const big = new Greemlin(4);

const result = big
    .kill(small)
    .eat(mid)
    .kill(big.eat(mid))
    .power;

console.log(result);