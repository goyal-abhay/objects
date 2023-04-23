let pairs = (obj) => {
    let ans = [];
    for (let i in obj){
        ans.push([i,obj[i]]);
    }
    return ans;
}

module.exports = pairs;