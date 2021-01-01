console.log('hello');

//alert('mani');

//variables
var b = 'smoothie';
console.log(b);



//var age = prompt('what is your age');
//document.getElementById('someText').innerHTML = age;

// number in javascript
var num1 = 10;
 num1++;  
 console.log(num1); 
 //functions
//create a function
//call the function

// //creating a function
//  function fun(){
//      console.log('this is a function' );
//  }
// //call a function
// fun();    

function greeting(yourNmae){
  
  var result = 'hello' +' '  +  yourNmae;//string concatination

  console.log(result);
}
// var name = prompt("what is your name ?");
// greeting(name );  
// //how do arguments work in function

function sNum(num1, num2){
  var result = num1  + num2;
  console.log(result);
}

sNum(90,90);  

// while(num <100){

// }

//for loop

// for(let num =0; num<=100; num++ ){
//   console.log(num); 
// }

//data types
 //strings in javascript

 let fruit = 'banana';
 let moreFruits = 'banana\napple';
 console.log(moreFruits.length);
 console.log(fruit.indexOf('a'));  
 console.log(fruit.slice(2,5));  

 //array

 let mfruits = ['bananna','apple','peer'];

  mfruits = new Array ('bananna','apple','peer');
//  alert(mfruits[1]);

 let age = 45; //prompt('what is age');  
 if ((age>=18) && (age<=35)){
   status = 'tartget demo';

 }else{
   status = ' not';
 }
 console.log(status);

 switch (6){
   case 0:
     text = 'weekend';
    break;
    case 5:
      text ='weekend';
      break;
    case 6:
      text ='weekend';
      break; 
      default:
        text ='weekday';
 }
 console.log(text);