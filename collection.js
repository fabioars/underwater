/**
 *
 * @param {array|object} collection
 * @param {function} callback
 */
export const forEach = (collection, callback) => {
    const isArray = collection.isArray && collection.isArray();
    if(isArray){
        collection.forEach((value, key) => {
            callback(key, value, collection);
        });
    } else if(typeof collection === 'object') {
        for(const prop in collection) {
            callback(prop, collection[prop], collection);
        }
    } else {
        throw new Error(`[forEach] do not support type ${typeof collection}`);
    }
    return collection;
};
