let allValues = (obj) => {
    const ans = [];
    for (let i in obj){
        ans.push(obj[i]);
    }
    return ans;
}

module.exports = allValues;