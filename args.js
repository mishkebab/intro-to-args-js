function sum() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

// console.log(sum(1, 2, 3, 4));
// sum(1, 2, 3, 4, 5) === 15;

function sum(...arguments) {
    let sum = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

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

Function.prototype.curry = function (numArgs) {
    const numbers = [];
    let func = this;

    function _curried(arg) {
        numbers.push(arg);
         if (numbers.length === numArgs) {
            return func(numbers);
         } else {
            return _curried;
         }
    }
    return _curried;
};

const multiply = function (args) { 
    return args.reduce((acc, el) => acc*el);


};

// console.log(multiply([1, 2, 3]));

// const var1 = multiply.curry(3);
// console.log(var1(1)(2)(3));


Function.prototype.curry = function (numArgs) {
    const numbers = [];
    let func = this;

    function _curried(arg) {
        numbers.push(arg);
        if (numbers.length === numArgs) {
            return func.apply(null, numbers)     
        } else {
                return _curried;
             }
        }
        return _curried;
    };


    Function.prototype.curry = function (numArgs) {
        const numbers = [];
        
        const _curried = function (arg) {
            if (numbers.length === numArgs) {
                return this(...numbers);   
            } else {
                    return _curried;
            }
        };

            return _curried;

    };
        
    
