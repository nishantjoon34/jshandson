// Q1 :- function display(value) {
//   console.log(value)
// }

// function sum(num1, num2, callback) {
//   let res = num1 + num2;
//   callback(res);
// }

// sum(5, 5, display);

// Q2 :- setTimeout(()=>{
//     console.log(1);
//     setTimeout(()=>{
//         console.log(2);
//         setTimeout(()=>{
//             console.log(3);
//             setTimeout(()=>{
//                 console.log(4);
//                 setTimeout(()=>{
//                     console.log(5);
//                     setTimeout(()=>{
//                         console.log(6);
//                         setTimeout(()=>{
//                             console.log(7);
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)
// let val=0;
// const fun=()=>{
//     val++;
//     if(val==8) return;
//     setTimeout(()=>{
//         console.log(val);
//         fun();
//     },val*1000);
// }
// fun();


// Q3:- const promise=new Promise((resolve,reject)=>{
//     resolve()
// })

// let pro=promise;

// pro.then(()=>{
//     setTimeout(()=>{
//         console.log(1);
//     },1000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log(2);
//     },2000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log(3);
//     },3000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log(4);
//     },4000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log(5);
//     },5000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log(6);
//     },6000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log(7);
//     },7000)
// })


// Q4 :- function fun(data){
//     const promise=new Promise((resolve,reject)=>{
//         if(data=='yes'){
//             resolve('Promise Resolved')
//         }
//         else{
//             reject('Promise Rejected')
//         }
//     })
//     return promise
// }

// let ans=fun('')

// ans.then((data)=>{
//     console.log(data);
// })
// .catch((data)=>{
//     console.log(data);
// })


// Q5:- function mainFunction(callback) {
//   console.log("Hello World");
//   setTimeout(function() {
//     callback("Hi World");
//   }, 1000);
// }
 
// function fun(result) {
//   console.log("Result: " + result);
// }

// mainFunction(fun);

// Q6 :- setTimeout(()=>{
//     console.log(5);
//     setTimeout(()=>{
//         console.log(6);
//         setTimeout(()=>{
//             console.log(7);
//         },1000)
//     },1000)
// },1000)

// Q7 :- function fun(data){
//     const promise=new Promise((resolve,reject)=>{
//         if(data=='yes'){
//             resolve('Promise Resolved')
//         }
//         else{
//             reject('Promise Rejected')
//         }
//     })
//     return promise
// }

// let ans=fun('')

// ans.then((data)=>{
//     console.log(data);
// })
// .catch((data)=>{
//     console.log(data);
// })

// Q8:-
// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("Waiting for the promise to be Resolved");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
// }
  
// myDisplay();


//Q9:-
// function job(delay){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log('Resolving',delay)
//       resolve('done '+delay)
//     },delay)
//   })
// }

// var promise=Promise.all([job(1000),job(2000),job(3000)]);

// promise.then((data)=>{
//   console.log('All done');
//   data.forEach(function(text){
//     console.log(text)
//   })
// })