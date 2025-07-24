/***
 * object new features
 * =====================
 * object.keys
 * object.values
 * object.entries
 * Object.assign
 * ======================
 * deal with asynchronous function ===> how it execute in memory
 * wep api , message queue, event loop , global execution context
 * callback hell
 * promise
 * then , catch
 * * async , await
 *
 */
let person2 = {
  address: "cairo",
};
let name = "ayaat";
let age = 25;
// let person ={fname:fname,age:age}  ===> {fname,age}
let person = {
  name,
  age,
  job: "Developer",
  display() {
    return "hello";
  },
  // ...person2,  // spread operator
};

// console.log(person.display());
// console.log(Object.keys(person));  // get keys of object
// console.log(Object.values(person)); // get values of object

// ============================
// console.log(Object.entries(person));// get key and value as array of array

// //  person={...person2};
// //  console.log(person);
// person=Object.assign(person,person2); // merge two objects
//  console.log(person);

// function showData(data={}) {
//   let defaultValues={name:"defautlName",age:"defualtAge",job:"defaultJob"}
// //   Object.assign(data,defaultValues);
// if(JSON.stringify(data)===JSON.stringify({})){
//   Object.assign(data,defaultValues);
//     console.log(data);
// }else{
//      console.log(data);
// }

// }
// // showData({});
// showData({name:"ayaat",age:25,job:"developer"});

// ============================    asynchronous function
// ===> function depends on time , event ===> setTimeout, setInterval, event

// function print()   //  // this function is synchronous  ==> it execute line by line
// {
//     console.log("first");
//     second();
//     third();
// }

// function second()
// {
//     setTimeout(() => {
//         console.log("second");
//     }, 1000);
// }
// function third()
// {
//     setTimeout(() => {
//         console.log("third");
//     }, 500);
// }

// print();
// let data=[ ];
// function getUserData(id){

// }

// // getUserData(1);
// function printAllData(data){
// setTimeout(() => {
//     data=[
//         {id:1, name:"ayaat", age:25},
//         {id:2, name:"ahmed", age:30},
//         {id:3, name:"sara", age:22},
//     ];

// }, 1000);
// setTimeout(() => {
//        data.filter(item=>{
//         if(item.id===1){
//             console.log(`ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`);
//             console.log("***************************");
//         }
//     })

// }, 1000);

// setTimeout(() => {
//        data.filter(item=>{
//         if(item.name==="ahmed"){
//             console.log(`ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`);
//             console.log("***************************");
//         }
//     })

// }, 2000);
// setTimeout(() => {
//        data.filter(item=>{
//         if(item.age===25){
//             console.log(`ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`);
//             console.log("***************************");
//         }
//     })

// }, 500);

// }

// printAllData(data);

/////==========================> Callback Hell  ===> nested callback functions -> SetTimeOut
// ==========> Promise

// function test(x,y)    /// call back funtion ===> function call another function
// {
// console.log(x);

// console.log(y);

// }

// function x(){
//     console.log("x");

// }

// function y(){
//     console.log("y");

// }

// test(x,y)

// ==== promise ===> object ==> constructor function ===> two callback functions
// status : pending   , fullfilled , rejected   ====> resquest -> response
// pending ==> waiting for response
// fullfilled ==> response is success
// rejected ==> response is failed , error

/**
 * let promise =new Promise((resolve, reject)=>{})
 * promise.then(()=>{}).catch(()=>{})
 * then ==> if response is success ==> resolve function
 * catch ==> if response is failed ==> reject function
 */

// let promise =new Promise((resolve , rejected)=>{

//     console.log(resolve());   // response is success
//     console.log(rejected()); // response is failed

// })

// console.log(promise);

// let promise =new Promise((resolve, reject)=>{
// let success=false;
// let data=["react","js"];
// if(success){
//     resolve(data);

// }else{
//     reject("error message")
// }
// })

// promise
// .then((data)=>{

//    console.log(data);

// })
// .catch((e)=>{
// console.log(e);

// });

// function getAllProducts() {
//   let myPromise = new Promise(function (x, y) {
//     let products;
//     setTimeout(() => {
//       products = [100, 200, 300];
//       if (products) {
//         x(products);
//       } else {
//         y(" no products");
//       }
//     }, 1000);
//   });
//   return myPromise;
// }
// getAllProducts()
// .then((products)=>{
// console.log(products);

// })
// .catch((e)=>{
//     console.log(e);

// })

// function getAllProducts() {
//   return new Promise((resolve, reject) => {
//     var product = {
//       id: 1,
//       name: "phone",
//       price: 60000,
//     };
//     product ? resolve(product) : reject("error message no products");
//   });
// }
// function getProduct(ProductId) {
//   return new Promise((resolve, reject) => {
//     var product = {
//       id: ProductId,
//       name: "phone",
//       price: 60000,
//     };
//     product ? resolve(product.id) : reject("error message no products");
//   });
// }

// // getProduct().then().catch()
// function getProductPrice(Productprice) {
//   return new Promise((resolve, reject) => {
//     var product = {
//       id: 1,
//       name: "phone",
//       price: Productprice,
//     };
//     product ? resolve(product.price) : reject("error message no products");
//   });
// }
// getAllProducts()
// .then((product)=>{
// //   return getProduct(product.id)  //    // product

//  return getProductPrice(product.price)

// }).then((product)=>{
//     console.log(product);

// })
// .catch((error)=>{
//     console.log(error);

// })

// async function execute() {
//   try {

//     let allProducts = await getAllProducts();
//     console.log(allProducts);
//     let product = await getProduct(1);
//     console.log(product);
//     let productPrice = await getProductPrice(3000);
//     console.log(productPrice);
//   } catch (error) {
//     console.log("error");
//   }
// }

// execute();

/// fetch data api

fetch("https://jsonplaceholder.typicode.com/users") // fetch ===> promise ==> then catch
//   .then((response) => {
//     // console.log(response.json());  // promise
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);

//     response.forEach((user) => {
//       document.writeln(
//         `<h1>userName : ${user.name}</h1>  <p> userEmail : ${user.email} </p>`
//       );
//       document.writeln("********************************************");
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });


  async function fetchUsers()
  {
    try {
        
  let response= await fetch("https://jsonplaceholder.typicode.com/users")
  let data = await response.json()
     data.forEach((user) => {
      document.writeln(
        `<h1>userName : ${user.name}</h1>  <p> userEmail : ${user.email} </p>`
      );
      document.writeln("********************************************");
    });

    } catch (error) {
        
    }

  }
fetchUsers();
