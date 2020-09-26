class Greemlin {
    constructor(power) {
        this.power = power
    }

    kill(greemlin) {
        return new Greemlin(this.power + greemlin.power);
    }

    eat(greemlin) {
       return new Greemlin(this.power * greemlin.power)
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