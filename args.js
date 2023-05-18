// function sum(arguments) {
//     let sum = 0;
    
//     console.log(arguments);
//     console.log(arguments.length);
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// };

// console.log(sum(1, 2, 3, 4));
// sum(1, 2, 3, 4, 5) === 15;

// function sum(...arguments) {
//     let sum = 0;
    
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// };

// console.log(sum(1, 2, 3, 4));

Function.prototype.myBind = function(context, ...bindArgs) {
    let func = this;
    return function(...callArgs) {
        return func.call(context,...bindArgs,...callArgs);
    }
}

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
}

class Dog {
    constructor(name) {
      this.name = name;
    }
  }

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind(pavlov, "meow")("Markov");
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");


function curriedSum(numArgs) {
    const numbers = [];
    function _curriedSum(num) {
        numbers.push(num)
        if (numbers.length === numArgs) {
            let sumArr = 0;
            numbers.forEach((n) => {sumArr += n});
            return sumArr;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56