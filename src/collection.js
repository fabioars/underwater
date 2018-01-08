export const forEach = (collection, iteratee) => {
    const isArray = collection.isArray && collection.isArray();
    if (isArray) {
        collection.forEach((value, key) => {
            iteratee(parseInt(key), value, collection);
        });
    } else if (typeof collection === 'object') {
        for (const prop in collection) {
            iteratee(prop, collection[prop], collection);
        }
    } else {
        throw new Error(`[forEach] do not support type ${typeof collection}`);
    }
    return collection;
};

export const map = (collection, iteratee) => {
    const result = [];

    forEach(collection, (key, value, collection) => {
        result.push(iteratee(value, key, collection));
    });

    return result;
};

