let allKeys = (obj) => {
    const ans = [];
    for (let key in obj){
        ans.push(key);
    }
    return ans;
}

module.exports = allKeys;