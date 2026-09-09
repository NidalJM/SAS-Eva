function existInArray(array,target) {
    count =0
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target)count ++;
         }return count
}

console.log(existInArray([1,7,8,6,4,3,9,7,2,7],7));
