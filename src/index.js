import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var a = 10;
var b = null;
var c = undefined;

// console.log(b);
// console.log(c);
console.log(typeof(null))
console.log(typeof(undefined))

console.log(typeof typeof(null))
console.log(typeof typeof(undefined))
console.log(typeof typeof a)

console.log(null == undefined)
console.log(null === undefined)

console.log(+"2");
console.log(-"2");

console.log("2"+ "3")
console.log("2"+"3")
console.log("2"+ +"3")
console.log(+"2"+"3")
console.log(+"2" +"3")
console.log(+"2"+ +"3")
console.log(2+"3")

console.log(NaN == NaN)
console.log(typeof NaN)
var l = +"abc";
var m = +"xyz";
console.log(l+m);


//Arrays
var a = [1, 2, function (){}, "string"];

var b = [1, 2, 3, 4, 5];
var c = b;
c.pop()
console.log(c);
console.log(b);

b = []
console.log(b)
console.log(c)

// Object
var obj1 = {};
var obj2 = new Object();

var obj = {
  a: 10,
  b: 20,
  c: function(){
    console.log("hi");
  },
  d: [1,2, 3,4],
  e: {
    b: 20
  }
}

console.log(obj.a);
console.log(obj['a'])
var z = 'd';
console.log(obj[z])
obj.k = 2;
console.log(obj)

function Dog(name, breed){
  this.name = name;
  this.breed = breed;
  this.bark = function(){
    console.log("bow... bow...");
  }
}
var dog1 = new Dog("Snoop Dog", "High");
var dog2 = new Dog("Snoop", "High");
dog1.bark2 = function(){
  console.log("Inside bark2");
}
console.log(dog1);
console.log(dog2);


