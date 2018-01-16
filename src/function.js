export const debounce = (callback, wait, immediate = false) => {
    let time;

    return (...args) => {
        const later = () => {
            time = null;

            !immediate ? callback(args) : null;
        };

        clearTimeout(time);
        time = setTimeout(later, wait);

        immediate && !time ? callback(args) : null;
    };
};

export const throttle = (callback, wait, options = {}) => {
    const state = {
        timeout: null,
        previus: 0,
        result: undefined
    };

    const later = (...args) => {
        state.previous = options.leading === false ? 0 : Date.now();
        state.timeout = null;
        state.result = callback(args);
    };

    return (...args) => {
        const now = Date.now();
        if (!state.previous && options.leading === false) state.previous = now;

        const remaining = wait - (now - state.previous);

        if (remaining <= 0) {
            clearTimeout(state.timeout);
            state.timeout = null;
            state.previous = now;
            state.result = callback(args);
        } else if (!state.timeout && options.trailing !== false) {
            state.timeout = setTimeout(later, remaining);
        }

        return state.result;
    };
};
