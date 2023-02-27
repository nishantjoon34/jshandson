// Q1 :- const parent={
//     name:"parent",
//     age:"older",
//     every:function(){
//         console.log(this.name+ " "+ this.age);
//     }
// }
// const child={
//     name:"child",
//     age:"younger"
// }
// child.__proto__=parent;

// Q2 :- function Person() {
//     this.name = 'John'
// }

// Person.prototype.name = 'Peter';
// Person.prototype.age = 23

// const person1 = new Person();

// console.log(person1.name); 
// console.log(person1.age); 

// Q3 :- Array.prototype.sum=function(){
//     let sum=0;
//     for(let i=0; i<this.length; i++){
//         sum+=this[i];
//     }
//     return sum;
// }

// const arr=[1,2,3,4];
// console.log(arr.sum())

// Q4 :- const parent={
//     name:"parent",
//     age:"older",
//     every:function(){
//         console.log(this.name+ " "+ this.age);
//     }
// }
// const child={
//     name:"child",
//     age:"younger"
// }

// child.__proto__=parent;

// console.log(child.age);
// console.log(child.name)
// console.log(child.every())