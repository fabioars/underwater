
export const range = (input, output) => (
    value => (
        output[0] + (value - input[0]) * (output[1] - output[0]) / (input[1] - input[0])
    )
);

export const randomInt = (min, max) => (
    Math.floor(Math.random() * (max - min) + min)
);

export const random = (min, max) => (
    Math.random() * (max - min) + min
);
