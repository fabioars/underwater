
export const range = (input, output) => value =>
    output[0] +
    (value - input[0]) * (output[1] - output[0]) / (input[1] - input[0]);

export const bezier = pts => {
    return t => {
        let a = pts,
            b = [],
            i = 0,
            j = 0;

        for (a = pts; a.length > 1; a = b)
            for (i = 0, b = [], j; i < a.length - 1; i++)
                for (b[i] = [], j = 0; j < a[i].length; j++)
                    b[i][j] = a[i][j] * (1 - t) + a[i + 1][j] * t;

        return a[0];
    };
};

export const random = (min, max, isInt = false) => {
    const num = Math.random() * (max - min) + min;
    return !isInt ? num : Math.floor(num);
};

export const randomGenerator = (min, max, defaultInt = false) => (isInt = defaultInt) => random(min, max, isInt);

export const inRange = (start, end) => value => value >= start && value <= end;

export const zeroPad = (num, places = 2) => {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
};
