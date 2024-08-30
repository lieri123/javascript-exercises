const removeFromArray = function(my_arr, ...target) {
    let length = my_arr.length

    let new_arr = []

    my_arr.forEach((items) => {

        if(!target.includes(items)){
            new_arr.push(items)
        }
        
    });
    return new_arr
};

// Do not edit below this line
module.exports = removeFromArray;
