// activity 1
// task 1
const arr = [1  ,2, 3, 4, 5]
console.log(arr);

for (const val of arr) {
    console.log(val);
}
// task 2 
console.log(`first ele ${arr[0]} and ${arr[arr.length-1]}`);

//  activity  2
// task 3 , 4, 5, 6

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(1);
console.log(arr);

// activity  4

for (let index = 0; index < arr.length; index++) {
    const ele = arr[index];
    console.log(ele);
    
}

arr.forEach(element => {
    console.log(element);
    
});