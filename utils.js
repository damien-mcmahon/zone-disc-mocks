module.exports = {
    range: (startAt = 0, size) => [...Array(size).keys()].map(i => i + startAt),
    randomInt: (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};