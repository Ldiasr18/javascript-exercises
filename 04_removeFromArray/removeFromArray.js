const removeFromArray = function(array, ...extras) {
    let newArray = [];
    array.forEach(item => {
        if (!extras.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
