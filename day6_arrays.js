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

// activity 3 
// task 7 ,8 ,9

const ar  = [1, 2, 3, 4, 5]
const nearrr = ar.map((num)=> num * 2)
console.log(nearrr);


const evenarr = ar.filter((num)=> {
       return (num % 2) == 0
})

console.log(evenarr);

const sumofarr = ar.reduce((acc, currval)=> (acc + currval),0 )
 console.log(sumofarr);

//   task 11

const val = ar.forEach((num)=> {
     return num;
})
console.log(val);


// task 12\

const arr2s = [1,2,4,5][2,4,5];

 const valll  = arr2s.forEach((num)=>{
        return num;
 })
 console.log(valll);
  