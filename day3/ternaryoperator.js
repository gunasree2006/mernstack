let mark=30;
if(mark>=40){
    console.log("pass");
}
else{
    console.log("fail");
}

let result=mark>40?"pass":"fail";
console.log(result);
//check even or odd
let n=5;
let even_or_odd=n%2==0?"even":"odd";
console.log(even_or_odd)
//bitwise operations
let a=5;
let b=10;
console.log("bitwise AND",a&b);
console.log("bitwise OR",a|b);
console.log("negotiation ",~a);
console.log("bitwise XOR",a^b);
//call back:calling the function using function.
function add(a,b)
{
    console.log(a+b);
}
//add(2,3);->also possible in defination func

//sub(10,3);->not possible in arrow function coz after arrow function we should call
const sub=(a,b)=>{
    console.log(a-b);
}
sub(10,3);

//call back function
const calc=(a,b,fun)=>  //fun is a variable.
{
    fun(a,b)
}
calc(10,3,add);    //given function as variable.
//optional chaining: checks whether the value is exist or not
let num=[2,3,4,5,6,7,8]
let obj={
    name:'abc',
    state:{
       city :'kurnool',
      dis:'mada'   //we need to give differnt key values should be same but key must be distinct
    },
age:22
} /*
for(i in obj){
    console.log(i);
} 
    console.log(obj?.state?.city) ->checks obj exist or not if exists print other
    wise no error will occur*/
console.log(obj?.state?.city) //fails when obj or name or city is empty
console.log(obj?.state?.dis) 