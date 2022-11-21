var b;
var a = {
  x: 10,
  calculate: function (z) {
    return this.x + this.y + z;
  },
  __proto__: "String"
};

var b = {
  y: 20,
  __proto__: a
};

var c = {
  y: 30,
  __proto__: a
};

console.log(a.calculate(10));
console.log(b.calculate(10));
console.log(c.calculate(10));
console.log(a);
console.log(b);
console.log(c);

var animal = {
  eats: true,
  walk: function () {
    console.log("Animal Walks");
  }
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

var longEar = {
  earLength: 10,
  __proto__: rabbit
};

console.log(rabbit);
console.log(longEar);

// call, apply and bind
var pokemon = {
  firstname: "pika",
  lastname: "chu",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
};

var pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

pokemonName.call(pokemon, "sushi", "algorithm");

pokemonName.apply(pokemon, ["sushi", "algorithm"]);

var myPokemonName = pokemonName.bind(pokemon);
myPokemonName("noodles", "karate");

var monica = {
  name: "Monica Geller",
  total: 400,
  deductMontlyFee: function (fee) {
    this.total = this.total - fee;
    return this.name + " remaining balacne is " + this.total;
  }
};

var rachel = {
  name: "Rachel Green",
  total: 1000
};

console.log(monica.deductMontlyFee.call(rachel, 100));

var myMonthlyFeeDeductionMethod = monica.deductMontlyFee.bind(rachel);
console.log(myMonthlyFeeDeductionMethod(200));
