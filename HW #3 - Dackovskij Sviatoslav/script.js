
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

function convert(hash) {
    arr = [];
    var i = 0;

    for (var key in hash) {
        arr[i] = key + ', ' + hash[key];
        i++;
    }
    return arr;
}

// #3 Complete the method/function so that it converts dash/underscore delimited words into camel casing.
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
// #4 function that takes a sentence (string) and reverses each word in the sentence.

function reverse(str) {

    var str1='';

    if ( str[str.length - 1] !== ' ') {
        str = str + ' ';
    }

    for (var i = 0; i < str.length - 1; i++) {

        if (str[i] === ' ' || i === 0) {
            if (str[i] === ' ') {
                i++
            }

            for (var k = i; str[k] !== ' ' && k < str.length - 1; k++) {
        }
            for (var j = k; j >= i; j--)  {
                str1 = str1 + str[j];
            }
        }

    }

    if (str[0] !== ' ') {
        return str1.slice(1,str1.length);
    }

    return str1;
}

// #5 stringExpansion

function stringExpansion (str) {

   var str1 = '';

   for (var i = 0; i < str.length; i++) {
       if (isNaN (str[i])) {
           for (var j = 0; j < Number(str[i-1]) || j < 1; j++) {
               if (str[i - 1] === '0') {
                   break;
               }
           str1 = str1 + str[i];
           }
       }
   }
return str1;
}

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



