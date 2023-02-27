// Q1 :- let a=document.getElementById('text');

// Q2 :- let b=document.getElementsByTagName('h1')

// Q3 :- let c=document.getElementsByClassName('box');

// Q4 :- b[0].innerText="Hello World"

// Q5 :- function fun(){
//     document.getElementById('dd').style.flexDirection='column'
// }

// Q6 :- window is the global object for all objects and functions.
// document is the root element of document object model.

// Q7 :- document.getElementsByTagName('h1')[0].id="heading";
// document.getElementById('heading').style.color='red';

// Q8 :- function replace(){
//     document.getElementById('hello').innerText="Welcome to Elevation Academy";
// }

// Q9 :- var h,m,s;
// let str="";
// function time() {
//     var t=new Date();
//     h=t.getHours();
//     m=t.getMinutes();
//     s=t.getSeconds();
//     if(h>=12){
//         if(h!=12){
//             h-=12;
//         }
//         document.getElementById("am").innerText="PM";
//         str="PM";
//     }
//     else{
//         document.getElementById("am").innerText="AM";
//         str="AM";
//     }
//     let x="",y="",z="";
//     if(h<=9){
//         x+='0'; x+=h;
//     }
//     else{
//         x+=h;
//     }
//     if(m<=9){
//         y+='0'; y+=m;
//     }
//     else{
//         y+=m;
//     }
//     if(s<=9){
//         z+='0'; z+=s;
//     }
//     else{
//         z+=s;
//     }
//     document.getElementById("tt").innerText=x;
//     document.getElementById("mm").innerText=y;
//     document.getElementById("ss").innerText=z;
// }
// setInterval(time,1000);


// Q10 :- function fun(){
//     let val=document.getElementById("year").value;
//     document.getElementById("text").innerText=val;
// }

// Q11 :- const form = document.getElementById('form')
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const name = form.name.value
//         const email = form.email.value
//         const contact = form.contact.value
//         const dob = form.dob.value
//         var ind = email.indexOf("@")
//         if (email.substr(ind + 1) !== 'prepbytes.com') {
//             alert('Email is of different domain')
//             return;
//         }
//         if (contact.substr(0, 2) !== '91' || contact.length != 10) {
//             alert('Contact Number is not valid')
//             return;
//         }
//         if (parseInt(dob.substr(0,4)) < 1995) {
//             alert('DOB is invalid')
//             return;
//         }
//     alert('Form Submitted')
// })