
/**
 *
 * @param {array} input
 * @param {array} output
 */
export const range = (input, output) => (
    value => (
        output[0] + (value - input[0]) * (output[1] - output[0]) / (input[1] - input[0])
    )
);

/**
 * FIXME: To use const
 * @param {array} pts
 */
export const bezier = pts => {
    return t => {
        let a = pts,
            b = [],
            i = 0,
            j = 0;

        for (a = pts; a.length > 1; a = b)
            for (i = 0, b = [], j; i < a.length - 1; i++)
                for (b[i] = [], j = 0; j < a[i].length; j++)
                    b[i][j] = a[i][j] * (1 - t) + a[i+1][j] * t;

        return a[0];
    };
};

/**
 *
 * @param {number} min
 * @param {number} max
 */
export const random = (min, max) => (
    Math.random() * (max - min) + min
);

/**
 *
 * @param {number} min
 * @param {number} max
 */
export const randomInt = (min, max) => (
    Math.floor(random(min, max))
);

/**
 *
 * @param {number} min
 * @param {number} max
 */
export const randomGenerator = (min, max) => (
    () => random(min, max)
);

export const inRange = (value, start, end) => (
    value >= start && value <= end
);
