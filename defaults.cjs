let defaults = (obj,defaultProps) => {
    for (let i in obj){
        if (!obj[i]){
            obj[i] = defaultProps[i];
        }
    }
    return obj;
}

module.exports = defaults;