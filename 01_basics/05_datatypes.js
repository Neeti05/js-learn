// primitive - String, Number, Boolean, Null, Undefined, Symbol, BigInt
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid)

// non-primitive (reference) - array, objects, functions

const heros = ["shaktiman", "batman","naagraj"]
let myObj= {
    name:"neeti",
    age:20
}
const MyFunction = function(){
console.log("Hello World")
}