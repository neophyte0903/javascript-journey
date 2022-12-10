//undefined
let firstName;

console.log(typeof firstName)
//null
firstName=null;
console.log(typeof firstName) //here is a bug it cant be changed for conviniece


//BigInt
firstName=BigInt(1222222222222222444444444445555);
console.log(typeof firstName,firstName)