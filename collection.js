export const forEach = (collection, iteratee) => {
    const isArray = collection.isArray && collection.isArray();
    if (isArray) {
        collection.forEach((value, key) => {
            iteratee(key, value, collection);
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
