// create a custom log function
// e.g myLog("hello world");
//      app hello world

//     myLog("my message", "your message")
//       app my message your message

function myLog(){
    var args = Array.prototype.slice.apply(arguments);
    //var args = Array.prototype.slice.call(arguments);
    console.log(args);
    args.unshift("app")
    console.log.apply(console, args);
}
// function myLog2(){
//     var args = Array.call(arguments, arguments);
//     console.log(args)
//     args.unshift("app")
//     console.log(args)
//     console.log.apply(console, args);
// }
function myLog3(){
    var args = Array.prototype.join.call(arguments, " ");
    console.log(args)
    args = "app "+args;
    console.log.call(null, args);
}

// myLog("hi");
// myLog("my message", "your message");

// myLog2("hi");
// myLog2("my message", "your message");

myLog3("hi");
myLog3("my message", "your message");

var a = {}
var b = {k:'hello'}
var c = {}
a[b] = 123
a[c] = 456
console.log(a[b]);
//console.log(b[k]); // will try to stringfy value of k but k has no value 
console.log(b['k']);

// inheritance
function Mammal(name){
    this.name = name;
    this.offspring = [];

}
Mammal.prototype.haveABaby = function(){
    var newBaby = new Mammal("baby "+this.name);
    this.offspring.push(newBaby);
    return newBaby;
}

function Cat(name){
    this.name = name;
}
console.log(new Cat("Billy1"));

Cat.prototype = new Mammal();
// Cat.prototype = Object.create(Mammal.prototype)
console.log(new Cat("Billy2"));


Cat.prototype.constructor = Cat; // what's the significance of this statement


console.log(new Cat("Billy3"));
console.log(new Mammal())

// Closure
function makeCounter(){
    var count = 0;
    return function(){
        return count++;
    }
}

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());

// Currying - usecase of closure
// implement add(2,3) and add(2)(3)

function add(x, y){
    if(arguments.length > 1){
        return x + y;
    }
    return function(y){
        return x + y;
    }
}

console.log(add(2, 3));
console.log(add(2)(3));

// implement add(x,y,z...) and add(x)(y)(z).... generalize add method for any number of arguments
function generalizeAdd(item){
    var sum = 0;
    if(arguments.length > 1){
        for(key in arguments){
            // console.log(arguments[key])
            sum += arguments[key];
        }
        return sum;
    }
    else{
        return function(){
            sum += item;
            return sum;
        }
    }
}

console.log(generalizeAdd(2,3,4));
console.log(generalizeAdd(2)(3)(4));