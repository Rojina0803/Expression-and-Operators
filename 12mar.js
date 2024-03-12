// Expression and operators


let a=45;
let b= 4;
let a= 10
b=4
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a/b=",a/b)
console.log("a*b=",a*b)
console.log("a**b=",a**b)
console.log("a%b=",a%b)


console.log("++a=",++a)
console.log("a++=",a++)
console.log("--a=",--a)
console.log("a--=",a--)
console.log("a=", a)
console.log("a--=",a--)


//Assignment Operator:
//"="
 const x= function(){

 }

const a = 1 + 2 * 3;
const y = 2 * 3 + 1;


let assignment =0;
 assignment += 5;
 console.log(assignment)



const obj = {};

obj.x = 3;
console.log(obj.x); 
console.log(obj); 

const key = "y";
obj[key] = 5;
console.log(obj[key]); 
console.log(obj); 


const val = 0;
val.x = 3;

console.log(val.x); 
console.log(val);

const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
console.log( one, two, three)

let arr=[1,2,23,56,78,90,78,];
// let[a,b, ...rest]=arr;

// console.log(a,b,rest )
// let[a, , ,b, ...rest]=arr;

// console.log(a,b,rest )
let{a,b}={a:1, b:5}

console.log(a,b)


// chaining expressions and operators
function example() {
    // JavaScript interprets this as
    // let a = ( b = ( c = 1 ) );
    // The let keyword only applies to variable a; variables b and c become
    // global variables.
    let a = b = c = 1;
  };
  console.log(a); 
  console.log(b); 
  console.log(c);

function f() {
    console.log("F!");
    return 2;
  }
  function g() {
    console.log("G!");
    return 3;
  }
  let x, y;


//comparison operatorsss

let row1= 6;
let row2= "6";

console.log("row1==row2",row1==row2,)
console.log("row1!=row2",row1!=row2,)
console.log("row1===row2",row1===row2,)
console.log("row1!==row2",row1!==row2,)

//logical operators
let x=5;
let y=6;
console.log(x<y && x==5)

