// arrow function


console.log("--- Arrow Func ---");

var isEven = (ele) => {

    return ele % 2 === 0; // strict equality '==='
}

// console.log(isEven(4));




var res = [2,4,7,8,10].every(isEven);

console.log(res);

// O/P : if even -> true
        // if odd -> false

/// CallBack function
console.log("---- callback func ----");

var ans = [3,5,7,9].every((i) => i%2 != 0);


console.log(ans);






