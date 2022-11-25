function isArray(obj){
    if(obj.constructor === Array){
        return true;
    }
    return false;
}
var list = [];
var str = "";
console.log(isArray(list))
console.log(isArray(str))

Object.prototype.toString.call([])

'[object Array]'
Object.prototype.toString.call("jgfhjgjhg")
'[object String]'
Object.prototype.toString.call()
'[object Undefined]'
Object.prototype.toString.call(null)
'[object Null]'
Object.prototype.toString.call(undefined)
'[object Undefined]'
Object.prototype.toString.call(true)

// Arrow function
function bob(a){
    return a + 100;
}

var bob2 = a => a + 10;
console.log(bob2(10));


// var, let, const
(function(){
    console.log("The salary is "+salary);
    let salary = 50000;
    console.log("The original salary is "+salary);
})();

// currying function


// Event Loop
(function(){
    console.log(1); // stack
    setTimeout(() => console.log(4), 1000); // web api -> callback queue
    setTimeout(() => console.log(3), 0); // web api -> callback queue
    console.log(2); // stack
})()

// Even listeners

function handleClick(e){
    console.log("you clicked me!!");
    console.log(e);
}
const buttonElem = document.getElementById("myButton");
//buttonElem.addEventListener("click", handleClick, false);

buttonElem.addEventListener("click", (e) => handleClick());













