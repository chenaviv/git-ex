'use strict';

function isPrimeNum(num) {
    if ( num < 1 || num % 1 !== 0 ) return false;
    
    var isPrime = true;
    var limit = Math.sqrt(num);
    var divider = 2;

    while ( isPrime && divider <= limit) {
        if ( num % divider === 0 ) isPrime = false;
        divider++
    }

    return isPrime;
}

console.assert(isPrimeNum(17) === true, 'isPrimeNum thinks 17 is not prime. Check yourself.');
console.assert(isPrimeNum(2) === true, 'isPrimeNum thinks 2 is not prime. Check yourself.');
console.assert(isPrimeNum(1) === true, 'isPrimeNum thinks 1 is not prime. Check yourself.');
console.assert(isPrimeNum(4) !== true, 'isPrimeNum thinks 4 is prime. Check yourself.');