// Q1 :- function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
// ouptut 1 2 3 4

// Q2 :- let count=0;
// (function(){
//     if(count===0){
//         let count=1;
//         console.log(count);  // 1
//     }
//     console.log(count);      // 0
// })();

// Q3 :- for(var i=0; i<3; i++){
//     setTimeout(function log(){
//         console.log(i);
//     },1000)
// }

// Output :- 3 3 3

// Q4 :- (function outer(length){
//     (function inner(breadth){
//         console.log(length*breadth)
//     })(10)
// })(12)

// Q5 :- function counter(){
//     var k=0;
//     function inner(){
//         return k+=1;
//     }
//     return inner;
// }
// var value=counter();
// console.log(value())
// console.log(value())
// console.log(value())

// Q6 :- var a=12;
// (function(){
//     alert(a)
// })()

// 12 in alert

// Q7 :- var a=10;
// var x=(function(){
//     var a=12;
//     return function(){
//         console.log(a);
//     }
// })();

// x();  get 12 as the ouptut

// Q8 :- var globalVar="xyz";

// (function outerFunc(outerArg){
//     var outerVar='a';
//     (function innerFunc(innerArg){
//         var innerVar='b';
//         console.log(
//             "outerArg = "+outerArg+"\n"+
//             "innerArg = "+innerArg+"\n"+
//             "outerVar = "+outerVar+"\n"+
//             "innerVar = "+innerVar+"\n"+
//             "globalVar = "+globalVar
//         )
//     })(456)
// })(123)

// Output :-
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
