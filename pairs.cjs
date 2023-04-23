let pairs = (obj) => {
    let ans = [];
    for (let key in obj){
        ans.push([key,obj[key]]);
    }
    return ans;
}

module.exports = pairs;