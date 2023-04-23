let allKeys = (obj) => {
    const ans = [];
    for (let i in obj){
        ans.push(i);
    }
    return ans;
}

module.exports = allKeys;