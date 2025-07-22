// Day 1 Es===> new Version of JavaScript Code 

/**
 * var , let , const
 * destructuring
 * spread operator
 * default values
 * arrow functions
 * this , that pattern
 * string api 
 * array api
 */

 // var , let , const
 //1- var
 /**
  * var global scope====> var is function scoped ===> function scope
  * 1- var variable can be reassigned
  * 2- var variable can be redeclared
  * 3- var is knownon window object
  * 4- var is hoisted
  */
 // redeclared
//  var x=5; /// int
// var x="react group";  // string
//  console.log(x);
 

//  var x=5;
//  console.log(window.x);
 
//  var x=5;
// function test(params) {
//    var x=15;
//     console.log(x); //15
    
// }
// console.log(x); //5

// test();  // 15


// hoisting ====> use variable before declaration

// console.log(x);//undefined    ///// gloabal context file     x=undefined =>    x=10
//                                // function test () ===> call 
// var x = 10; // hoisting
// console.log(x);//10


// ========== 2 - let
/**
 * 1- let can be reassigned
 * 2- let cann't be redeclared in the same scope
 * 3- let is not hoisted
 * 4- let is block scoped
 * 5-let is not known on window object
 */
// let x=5;
// x="ahmed";  // reassign
// let x="ahmed"; // error: Identifier 'x' has already been declared
// console.log(x);   // error ahmed 
// let hoisting // Cannot access 'x' before initialization
// console.log(x); 
// let x=15;

// function
// function test(params) {
//     let x=10;
//     console.log(x); // 10
    
// }
// // let x="test";
// test();
// console.log(x);//error: x is not defined

// let x=10;
// console.log(window.x); // undefined


// ========== 3 - const ==> consant variable ==> varible value not change
/**
 * 1- const cann't be reassigned
 * 2- const cann't be redeclared in the same scope
 * 3- const is not hoisted
 * 4- const is block scoped
 * 5- const is not known on window object
 */
// console.log(PI); //Cannot access 'PI' before initialization

// const PI=3.14;  // 1- const cann't be reassigned
// // const PI=10; // error: Identifier 'PI' has already been declared

// function test(params) {
//     const PI=3.14   // Block scoped
//     console.log(PI); // 3.14
    
    
// }
// const PI="GG";
// console.log(PI); //PI is not defined
// test(); // 3.14


///=======================>// Destructuring

       // 0 1 2   3   4
// let arr=[1, 2, 3, 4, 5]; // pointer ==> array name , index , value
// let x=arr[0];  //1
// let y=arr[1]; //2
// let z=arr[2];
// console.log(x) 
// console.log(y);


// // syntax sugar ===> 
// //  [x,y]=arr;  // 
// [,,z]=arr;  
// console.log(x)   // arr[0]
// console.log(y);   // arr[1]
// console.log(z);  



// 
// function useArr()
// {
//     return[1,2,3];
// }

// let result=useArr();
// console.log(result);// [1, 2, 3];




// let [x,y]=useArr()  // [1, 2, 3]
// console.log(x)   //1
// console.log(y);//2
// ;



// function useArr(temp) {
//     return [temp , function(){
//         console.log("Hello World");
//     },"test"];
    
// }

// let[x,y]=useArr(123);  // [123 , fun , "test"]
//  //[temp , function(){
//     //     console.log("Hello World");
//     // },"test"];

// console.log(x); // 123
// console.log(y);


// object destructuring
// let obj={name:"react",num:1};

// // console.log(obj.name); // react
// // console.log(obj.num);

// // let track_name=obj.name;
// // let track_num=obj.num;
// // let {name,num}=obj;
//    // obj_key:var
// // let {name:name,num:num}=obj;
// // let {name,num}=obj;// ===> syntax sugar 
// console.log(name); // react
// console.log(num); // 1  


// data type ==> primitive data type , reference data type
// primitive data type ==> string , number , boolean , null , undefined 
// reference data type ==> object , array  


// spread operator   ==> array

// let x=[1,2];
// // let y=x;  // [1,2] /// // y is a reference to x
// // x.push(3); //[1,2,3]
// // y.push(5); //[1,2,3,5]
// // console.log(x); 
// // console.log(y); 
// // let y=[...x]// spread operator  ===> copy values only 
// // x.push(3); // [1,2,3]
// // y.push(5); // [1,2,5]
// // console.log(x); 
// // console.log(y); 


// let y=["react",...x,"iti","g1"];
// console.log(y);


// // spread operator   ==> object
// let obj={name:"react",num:1};
// // let obj2=obj;// reference to obj ==> obj , obj2 reference to the same object
// let obj2={...obj}; // copy values only 
// obj2.branch="menoufia"; 
// obj.quarter=1; 
// console.log(obj)
// console.log(obj2);
//==============================================================================
/**
 *  * default values
 * arrow functions
 */

// types of functions ==> function statement , function expression , arrow function , annonymous function,callback function


// let x=(x=1,y=2)=>{
//     x=15;
//     y=20;
//     console.log(x,y);
    
// }
// test();

// let test=(x,y)=>{ // more than one parameter
//     console.log(x,y);
// }


// let x=z=>{ // one parameter
//     console.log(z);
// }

// let w=_=>{  // no parameter
//     console.log("test");
// }

// let y=_=>console.log("test");  // one line

// w();


// this  ==> window
// console.log(this);

// var x=10;
// console.log(this.x);


// function test() {
//     console.log(this);
    
//     console.log(this.x);
// }  
// test() 

// var name="js";
// // function getName() {
// //     console.log(this.name); // this is window object
// // }
// let obj={
//     name:"react",
//     num:1,
 
//     test:function(){   //  caller obj
//         console.log(this); //obj
//         // var that=this; // save this to that    //  that pattern 
        
//     //  setTimeout(function(){   // caller ==> window
//     // //    console.log(this.name); // ====> window
//     //    console.log(that.name); // ====> react

//     //  },1000)
//       setTimeout(()=>{   // caller ==> window
//     //    console.log(this.name); // ====> window
//        console.log(this.name); // ====> react

//      },1000)

      
//     }
// }

// obj.test(); // this is obj


// /**
//  * 
//  * arrow function ==> caller is not window object
//  */


//==============================================================================
/**
 *string api    ==> string methods 
 * array api
 */

 // compute ====> computer 

//  let str=" * Hello*World* ";
// console.log(str.length); 
// console.log(str.toUpperCase()); // HELLO WORLD  //
// console.log(str.toLowerCase()); // hello world   //
// console.log(str.indexOf("World")); // 6
// console.log(str.lastIndexOf("o")); // 7
// console.log(str.charAt(0)); // H
// console.log(str.includes("ayaat"));   //
// console.log(str.startsWith("Hello")); // true
// console.log(str.endsWith("World")); // true
// console.log(str.split("*")); // ["Hello", "World"]  // sperator   //
// console.log(str.replace("*"," track react")); //  track reactHello*World*
// console.log(str.replaceAll("*"," track react")); //  track reactHello track reactWorld track react


// array api ==> array methods 

let arr=[1,2,3,4,5];
// function find(value , index , arr){

// // console.log("value",value);
// // console.log("index",index);
// // console.log("arr",arr);

// for (let index = 0; index < arr.length; index++) {
//  if( arr[index]==value){
//     return index; // return index of value
//  }
    
// }
// }



// // // console.log(find(1,0,arr));
// for (let index = 0; index < arr.length; index++) {
    
//      find(5,index,arr);
//      console.log("***********************************************");
     
// }

// var result=arr.find((value,index)=>{
// return value==5; // return true or false
// })

// var result=arr.find((value,index)=> value>=5// return true or false
// )
// var result=arr.findIndex((value,index)=> value>=5// return true or false
// )
// console.log(result);

var itiTracks=["pd","opensource","mearn","php"];

// for (let index = 0; index <itiTracks.length; index++) {
//     console.log(`hello ${itiTracks[index]} track`);  
    
// }



// var reasult=itiTracks.map((value,index,arr)=>{
//     // // console.log(`hello ${value} track`);
//     // console.log(value);
//     if(value=="mearn")
//     {
//          return value;
        
//     }
    
// });
// var reasult=itiTracks.filter((value,index,arr)=>{
//     // // console.log(`hello ${value} track`);
//     // console.log(value);
//     if(value=="mearn")
//     {
//            return value;
        
//     }
 
// });

// console.log(reasult);


let devices=[
    {name:"mobile",price:1000,brand:"samsung"},
    {name:"laptop",price:2000,brand:"dell"},
    {name:"tablet",price:1500,brand:"samsung"},
    {name:"watch",price:500,brand:"apple"},
    {name:"tv",price:3000,brand:"sony"}
];

let userInput=document.getElementById("search");
var btnSearch=document.getElementById("btn-search");
btnSearch.addEventListener("click",function(){   
let userInputData=userInput.value.toLowerCase()??" ";


let result=devices.filter((device)=>{
    return device.name.toLowerCase().includes(userInputData) || device.brand.toLowerCase().includes(userInputData);

 })
 console.log(result);
 
 ;})


















