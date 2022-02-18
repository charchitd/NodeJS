
// spread operator

console.log("===== Spread Operator =====");

function sumOne(a, b){

    return a + b;
}

console.log(sumOne(5,3));

// Output : 8

// if we have to call an arr through a function

var arr = [6, 5];

console.log(sumOne(arr));

// output : 6,5 undifined
// bcz type of the data doesnt realy match

// now using spread operator this could be resolved

console.log(sumOne(...arr)); // spread optr takes the group and try to spread it into a multiple values
// output : 11

// Rest Optr
console.log("===== Rest Operator =====");

// it is also used when you dnt know how many arguments are needed

function sumTwo(...args)
{
console.log("Bunch the array together : ", args);


    let sum = 0;
    for (const arg of args)
    {
            sum += arg;
    }
    return sum;
}

console.log("Sum of args: ",sumTwo(2,5,3,5,2,9));


