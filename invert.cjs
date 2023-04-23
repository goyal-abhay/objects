let revObj = (obj) => {
    let rev = {}
    for (let key in obj){
        const keys = obj[key];
        rev[keys] = key;
    }
    return rev;
}

module.exports = revObj;