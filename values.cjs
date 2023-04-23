let allValues = (obj) => {
    const ans = [];
    for (let key in obj){
        ans.push(obj[key]);
    }
    return ans;
}

module.exports = allValues;