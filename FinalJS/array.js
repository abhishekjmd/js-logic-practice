// Q1: Remove Duplicates from Array  
// Write a function removeDuplicates(arr) that returns a new array with duplicates removed, preserving the original order.  

// Example:  
// removeDuplicates([1, 2, 2, 3, 4, 4]) => [1, 2, 3, 4]  
// removeDuplicates(["a", "b", "a", "c"]) => ["a", "b", "c"]  

const arr1 = [1, 2, 2, 3, 4, 4]

function removeDuplicates(arr) {
    let result = [];
    result = arr.filter((val, index) => arr1.indexOf(val) === index)
    return result

}

// console.log(removeDuplicates(arr1))




// Q2: Flatten Nested Array  
// Write a function flattenArray(arr) that takes a nested array and returns a new flattened array with all elements at a single level.  

// Example:  
// flattenArray([1, [2, [3, 4]], 5]) => [1, 2, 3, 4, 5]  
// flattenArray([[["a"]], ["b"], "c"]) => ["a", "b", "c"]  


function flattenArray(arr) {
    let result = [];
    const flatArr = (arr) => {
        for (let value of arr) {
            if (typeof (value) !== 'object') {
                result.push(value)
            } else {
                flatArr(value)
            }
        }
    }
    flatArr(arr);
    return result
}

// console.log(flattenArray([1, [2, [3, 4]], 5]))




// Q3: Rotate Array  
// Write a function rotateArray(arr, k) that rotates the array arr to the right by k positions.  

// Example:  
// rotateArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]  
// rotateArray(["a", "b", "c", "d"], 1) => ["d", "a", "b", "c"]  


function rotateArr(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr
}

// console.log(rotateArr(['a', 'b', 'c', 'd'], 1))




// Q4: Intersection of Arrays  
// Write a function intersection(arr1, arr2) that returns a new array containing the common elements between arr1 and arr2.  
// The result should not contain duplicates.  

// Example:  
// intersection([1, 2, 2, 3], [2, 3, 4]) => [2, 3]  
// intersection(["a", "b", "c"], ["b", "c", "d"]) => ["b", "c"]  

function intersection(arr1, arr2) {
    let result = [];
    filteredArr = arr1.filter((val, index) => arr1.indexOf(val) === index)
    for (let val of arr2) {
        if (filteredArr.includes(val)) {
            result.push(val)
        }
    }
    return result
}

// console.log(intersection([1, 2, 2, 3], [2, 3, 4]))



// Q5: Union of Arrays  
// Write a function union(arr1, arr2) that returns a new array containing all unique elements from both arr1 and arr2.  

// Example:  
// union([1, 2, 3], [3, 4, 5]) => [1, 2, 3, 4, 5]  
// union(["a", "b"], ["b", "c", "d"]) => ["a", "b", "c", "d"]  


function union(arr1, arr2) {
    let result = [];
    let merged = [...arr1, ...arr2];
    result = merged.filter((val, index) => merged.indexOf(val) === index)
    return result
}

// console.log(union([1,2,3],[3,4,5]))



// Q6: Move Zeros to End  
// Write a function moveZeros(arr) that moves all zeros in the array arr to the end while maintaining the order of non-zero elements.  

// Example:  
// moveZeros([0, 1, 0, 3, 12]) => [1, 3, 12, 0, 0]  
// moveZeros([0, 0, "a", "b"]) => ["a", "b", 0, 0]  


function moveZeros(arr) {
    let filterArr = arr.filter((val) => val !== 0);
    let zeroArr = arr.filter((value) => value === 0)
    for (let i = 0; i < zeroArr.length; i++) {
        filterArr.push(zeroArr[i]);
    }

    return filterArr
}

// console.log(moveZeros([0, 1, 0, 3, 12]))



// Q7: Pairs with Given Sum  
// Write a function findPairs(arr, target) that returns all pairs of numbers from arr whose sum equals target.  

// Example:  
// findPairs([1, 2, 3, 4, 5], 5) => [[1, 4], [2, 3]]  
// findPairs([2, 6, 3, 9, 11], 9) => [[6, 3]]  


function findPairs(arr, target) {
    let result = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length - i; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]])
            }
        }
    }
    return result;
}

// console.log(findPairs([1, 2, 3, 4, 5], 5))