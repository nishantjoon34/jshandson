// Q1 :- let str="abcadeecfb"
// let s="";
// const st=new Set();
// for(let i in str){
//     if(st.has(str[i])){
//         continue;
//     }
//     else{
//         s+=str[i];
//         st.add(str[i]);
//     }
// }
// console.log(s)

// Q2:-
// const s='abcadeecfb'

// let m=new Map();
// for (let i of s) {
//     if (m.has(i)) {
//         let k=m.get(i);
//         m.delete(i);
//         m.set(i,k+1);
//     } 
//     else{
//         m.set(i, 1)
//     }
// }


// for (let i of m.entries()) {
//     console.log(i)
// }