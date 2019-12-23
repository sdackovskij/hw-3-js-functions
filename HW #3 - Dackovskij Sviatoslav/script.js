
// #1 splitAndMerge
function splitAndMerge(str, sp) {
var str1 = '';
    for (var char of str) {
        if (char === ' ') {}
            else str1 = str1 + char + sp;
    }
   return str1.slice(0, str1.length - 1);
}

// #2 convert
// #3 Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// #4 function that takes a sentence (string) and reverses each word in the sentence.
// #5 stringExpansion
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
// #7 function transform that will transform array of numbers to array of functions that will return value from a base array.

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

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
newArray[3](); // should return 40

// #8 Function expects arbitrary number of digit arguments and returns compound value of them.

function sum() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }

    if ( 1 === args.length)
        return args[0];
    else {
        return (args[args.length-1] + sum(...args.slice(0,args.length-1)));
    }
}


// #9 Function expects number and logs values one by one till zero with one second delay.

function countDown(n) {
    for (var i = 1; n >= 0; n--) {
        setTimeout(console.log, 1000 * i, n);
        i++;
    }
}

// #10 polyfill for a .bind()



