export const forEach = (collection, iteratee) => {
    const isArray = collection.isArray && collection.isArray();
    if (isArray) {
        collection.forEach((value, key) => {
            iteratee(value, parseInt(key), collection);
        });
    } else if (typeof collection === 'object') {
        for (const prop in collection) {
            iteratee(collection[prop], prop, collection);
        }
    } else {
        throw new Error(`[forEach] do not support type ${typeof collection}`);
    }
    return collection;
};

export const each = forEach;

export const map = (collection, iteratee) => {
    const result = [];

    forEach(collection, (value, key, collection) => {
        result.push(iteratee(value, key, collection));
    });

    return result;
};

export const filter = (collection, iteratee) => {
    const result = [];

    forEach(collection, (value, key) => {
        const isFound = iteratee(value, key, collection);
        if(isFound) {
            result.push(value);
        }
    });

    return result;
};
