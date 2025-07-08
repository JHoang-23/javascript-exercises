const removeFromArray = function(arr, ...args) {
    let filteredArr = []
    for (let i = 0; i < arr.length; i++){
        if (!args.includes(arr[i])){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr

};

// Do not edit below this line
module.exports = removeFromArray;
