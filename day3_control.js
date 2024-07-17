// activity 1 
// task 1

let num1 = 5
if(num1> 0){
    console.log("positive");
}else if(num1 ==0){
    console.log("0");
}else{
    console.log("negative");
}

// task 2
let age = 19
if(age>= 18){
    console.log("elgible to vote");
}
else{
    console.log("not eligible to vote");
}

// activity 2 
// task 3
 
 let a  = 6
 let b = 4
 let c  = 10

 if(a>b &&  a >c){
    console.log("a largest");
 }else if(b>a && b> c){
    console.log("b largest");
 }else{
    console.log("c largest");
 }
//  activity 3 
// task 4

 const days  = 5;
 switch(days){
    case 1: console.log("monday");
    break;


   case 2: console.log("tueday");
   break;

   case 3: console.log("wednesday");
   break;

   case 4: console.log("thursday");
   break;
   case 5: console.log("friday");
   break;
   case 6: console.log("saturday");
   break;
   case 7: console.log("sunday");
   break;

   default:
    console.log("invalid day number");
 }
    
 const scores = 99

 switch (true) {
    case(scores>=91 && scores<=100):
{ console.log("A");
        }
        break;

        case 
         (scores>=81 && scores<=90) :{
            console.log("B");
        }
        break;
        case (scores>=71 && scores<=80): {
            console.log("C");
        }
        break;
        case  (scores>=61 && scores<=70): {
            console.log("D");
        }
        break;
    default:
        console.log("invalid scores");
        break;
 }

//  activity 4 
//  task 6 
let numb  =2
   const ans  =  (numb%2 == 0)? "even" : " odd" ;
   console.log(ans);
 
//   activity  5 
//  task 7
  
const leapyear  = 2016

if((leapyear % 4 == 0 && leapyear % 100 !== 0) || (leapyear % 400 ==0) ){
    console.log("leapyear");
}else{
    console.log("not leapyear");
}
 
