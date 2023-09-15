// let a = "JAVASCRIPT";
// // let b="cjo"
// // console.log(a.concat(`r`,b));
// // console.log(a.split("r", 2));
// // console.log(a.substring(2, -0));
// // =-0
// console.log(a.substring(4, -3));
// {}
// take input from the user



// ^  1,2 start
//  let a=prompt("Enter a string");
//  let b=""
// function palamdron() {
    

//  for(let i=a.length-1;i>=0;i--) {
   
//     b=b+a[i];
    
//  }
//  console.log(b);
//  if(a==b){
//     console.log(`${b} its a palamdron number`)
//  }
//  else {
//     console.log(`${a} its not a palamdron number`)
//  }
// }
// palamdron()

 // ^ 3 start

// function Alphabets() {
    
//  let i;
//  console.log("Alphabets form (A-Z) are:");
 
//  for ( i = 65; i <= 90; i++) {
//      console.log(String.fromCharCode(i),`= ascii value is ${i};` );
//      // document.write(String.fromCharCode(i),` = ascii value is ${i} `);
 
    
//  }
    
// }
// Alphabets()
// console.log(Alphabets())
// ^Alphabets form (a-z)
// function alphabets() {


// let i
// console.log("Alphabets form (a-z) are:");


// for ( i = 97; i <= 122; i++) {
//     console.log(String.fromCharCode(i),` ascii value is ${i} ` );
//     // document.write(String.fromCharCode(i),` ascii value is ${i} ` )

   
// }
// return Alphabets()
// }
// alphabets()
// ^ Alphabets form (z-a)

// function Reversealphabets() {
//     console.log("Reversealphabets form (a-z) are:"); 
// let i;
// for ( i = 112; i >= 97; i--) {
//     console.log(String.fromCharCode(i),` ascii value is ${i} ` );
//     document.write(String.fromCharCode(i),` ascii value is ${i} ` )

   
// }

 
// }
// Reversealphabets()



// ^   ascii value from 0 to 127

// function Ascii() {
//     let i;
//     for (i=32; i<=127;i++){
//         console.log(String.fromCharCode(i),` ascii value is ${i}` );
//     }
    
// }
// Ascii()


//^ write a program to check whether an element camera is available if it is not available or not add 
let a=["watch", "pencil","camera", "pen","mobile","laptop"];
// console.log(a)
if(a.includes("camera")==true){
    console.log(`camera is available in ` );
    console.log(` the index of camera is = ${a.indexOf("camera")}`)
}
else{
    a.splice(2,0,"camera")
    console.log(`${a.indexOf("camera")}`)
}
console.log(a)



// ^ array includes method
// let a=["watch", "pencil", "pen","mobile","laptop"];
 

// console.log(a.includes("watch",0));
// if(a.includes("watch")==true){
//     console.log(`ramkumar ,${a.includes("pencil")}`);
// }


// let array=["pen","pencil","book","mobile"];
// //  let b= array.includes("book",1);
// //  console.log(b);
//  console.log(array.includes("pencil",-4));

// let a=["watch", "pencil", "pen","mobile","laptop","laptop","laptop","laptop","laptop","laptop"];
// // let b=[];
// console.log((a.length-1),a.charAt(length-1));
// // let b= a.fill("ram",2,9);
// console.log(a)
// // console.log(a)
// console.log(a.unshift("watch","ram","ragbba"))
// let b=a.shift();


// console.log(a.(2,4))
// let b=a.slice(2,4);
// console.log(b)


