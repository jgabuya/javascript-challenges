const mostRecurrent = (set) => {
    const occ = Array(Math.max(...set) + 1).fill(0);

    set.map((item) => {
        occ[item]++;
    });

    return occ.indexOf(Math.max(...occ));
}

module.exports = mostRecurrent
