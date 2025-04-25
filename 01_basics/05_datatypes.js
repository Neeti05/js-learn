// // primitive - String, Number, Boolean, Null, Undefined, Symbol, BigInt
// const id = Symbol('123')
// const anotherid = Symbol('123')
// console.log(id == anotherid)

// // non-primitive (reference) - array, objects, functions

// const heros = ["shaktiman", "batman","naagraj"]
// let myObj= {
//     name:"neeti",
//     age:20
// }
// const MyFunction = function(){
// console.log("Hello World")
// }


//MEMORY
//Stack(Primitive)-copy, Heap(Reference)-reference
let name= "neeti"
let anothername = name
anothername = "neo"
console.log(name)
console.log(anothername)

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "user2@gmail.com"
console.log(userOne)
console.log(userTwo)
