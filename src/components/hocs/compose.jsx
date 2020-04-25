const compose = (...fn) => (comp) => {
    return fn.reduceRight((acc, f) => f(acc), comp);
};

export default compose;
