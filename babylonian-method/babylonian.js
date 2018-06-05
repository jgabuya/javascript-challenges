const squareRoot = (radicand) => {
    const calc = (radicand, sqrt) => {
        if (radicand < 0 || isNaN(radicand)) return NaN;

        if (! sqrt) sqrt = radicand / 2.0;

        const res = radicand / sqrt;
        const avg = (res + sqrt) / 2.0;

        if (sqrt === avg) return sqrt;

        return calc(radicand, avg);
    };

    return calc(radicand);
}

module.exports = squareRoot
