let revObj = (obj) => {
    let rev = {}
    for (let i in obj){
        const key = obj[i]
        rev[key] = i;
    }
    return rev;
}

module.exports = revObj;