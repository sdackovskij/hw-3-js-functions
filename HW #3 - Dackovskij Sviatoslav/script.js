// #1 splitAndMerge (version 1)
function splitAndMerge(str, sp) {
  var str1 = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str1 = str1 + " ";
    } else if (str[i + 1] === " " || i === str.length - 1) {
      str1 = str1 + str[i];
    } else str1 = str1 + str[i] + sp;
  }
  return str1;
}

//#1 splitAndMerge(version 2)

function splitAndMerge(str, sp) {
  return str
    .split(" ")
    .map(function(x) {
      return x.split("").join(sp);
    })
    .join(" ");
}

//console.log(splitAndMerge("My name is John"," ")); //should return "M y n a m e i s J o h n"
//console.log(splitAndMerge("Hello World!",",")); //should return "H,e,l,l,o W,o,r,l,d,!"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #2 convert

function convert(hash) {
  var arr = [];

  for (var key in hash) {
    arr.push([key, hash[key]]);
  }
  return arr;
}

//console.log(convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' }));
//should be [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

//////////////////////////////////////////////////////////////////////////////////////////////////////

// #3 (version 1) Complete the method/function so that it converts dash/underscore delimited words into camel casing.
function toCamelCase(str) {
    var str1 = '';

        for (var i = 0; i < str.length; i++) {
            if (str[i] === '_' || str[i] === '-') {
                str1 = str1 + str[i+1].toUpperCase();
                i++;
            }
            else str1 = str1 + str[i];
        }

        return str1;
}

// #3 (version 2)
function toCamelCase(str) {
  var i = 0;
  return str
    .split(/-|_/)
    .map(function(word) {
      if (i === 0) {
        i++;
        return word;
      }

      var x = word[0].toUpperCase();
      word = word.split("");
      word.shift();
      word.unshift(x);
      return word.join("");
    })
    .join("");
}
//console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
//console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #4 (version 1) function that takes a sentence (string) and reverses each word in the sentence.

function reverse(str) {
  var str1 = "";

  if (str[str.length - 1] !== " ") {
    str = str + " ";
  }

  for (var i = 0; i < str.length - 1; i++) {
    if (str[i] === " " || i === 0) {
      if (str[i] === " ") {
        i++;
      }

      for (var k = i; str[k] !== " " && k < str.length - 1; k++) {}
      for (var j = k; j >= i; j--) {
        str1 = str1 + str[j];
      }
    }
  }

  if (str[0] !== " ") {
    return str1.slice(1, str1.length);
  }

  return str1;
}

// #4 (version 2)
function reverse(str) {

  return str.split(' ').map(function(word) {
   return word.split('').reverse().join(''); 
}).join(' ');
}

//console.log(reverse(" A fun little challenge! ")); // " A nuf elttil !egnellahc "

//////////////////////////////////////////////////////////////////////////////////////////////////

// #5 stringExpansion

function stringExpansion(str) {
  var str1 = "";

  for (var i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      for (var j = 0; j < Number(str[i - 1]) || j < 1; j++) {
        if (str[i - 1] === "0") {
          break;
        }
        str1 = str1 + str[i];
      }
    }
  }
  return str1;
}

//console.log(stringExpansion('3D2a5d2f')); //'DDDaadddddff'
//console.log(stringExpansion('3d332f2a')); // 'dddffaa'
//console.log(stringExpansion('abcde')); //'abcde'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #6 functions that returns the largest and smallest number passed like a argument.
function largest() {
  var i = arguments[0];
  for (var k = 1; k < arguments.length; k++) {
    if (i < arguments[k]) {
      i = arguments[k];
    }
  }
  return i;
}

function smallest() {
  var i = arguments[0];
  for (var k = 1; k < arguments.length; k++) {
    if (i > arguments[k]) {
      i = arguments[k];
    }
  }
  return i;
}

//console.log(largest(2, 0.1, -5, 100, 3)); // 100
//console.log(smallest(2, 0.1, -5, 100, 3));// -5

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #7 (version 1) function transform that will transform array of numbers to array of functions that will return value from a base array.

function transform(arr) {
  var elementsAll = [];

  for (var i = 0; i < arr.length; i++) {
    var element = function its() {
      return its.i;
    };

    element.i = arr[i];
    elementsAll.push(element);
  }
  return elementsAll;
}

// #7 (version 2)

function transform(arr) {

  var elementsAll = arr.map(function(x) {
      return function(){
        return x;
      };
    }
  );
  
  return elementsAll;
}

//const baseArray = [10, 20, 30, 40, 50];
//const newArray = transform(baseArray);
//console.log(newArray[3]()); // should return 40
//console.log(newArray[4]()); // should return 50 

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// #8 Function expects arbitrary number of digit arguments and returns compound value of them.

function sum() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
  }

  if (1 === args.length) return args[0];
  else {
    return args[args.length - 1] + sum(...args.slice(0, args.length - 1));
  }
}

//console.log(sum(1,3,5,7));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #9 Function expects number and logs values one by one till zero with one second delay.

function countDown(n) {
  for (var i = 1; n >= 0; n--) {
    setTimeout(console.log, 1000 * i, n);
    i++;
  }
}

//countDown(5);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #10 polyfill for a .bind()

Function.prototype.myBind = function(context) {
  var fn = this;
  return function(...ars) {
    return fn.apply(context, ars);
  };
};

function addPropToNumber(number) {
  return this.prop + number;
}
var bound = addPropToNumber.myBind({ prop: 9 });

//console.log(bound(1)); // 10
