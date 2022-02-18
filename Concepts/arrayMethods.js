// methods are push(), map(), sort(), filter(), reduce()

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  

const ages = [11,23,45,12,44,66,28,16,09,98,67,43,32,10];


console.log("---- forEach")

ages.forEach(ele => {
    console.log(ele)
});


// sort()
console.log("---- sort")
// short hand
const sortedCompanies = companies.sort((c1,c2) => c1.start > c2.start ? 1 : -1);
console.log(sortedCompanies);

// sort ages

console.log("---- sort ages");

const sortAges = ages.sort((u, v) => u - v); // assending
// const sortAges = ages.sort((u, v) => v - u); // desending
console.log(sortAges);


// filter()
console.log("---- filter")
// let canVote = ages.filter(function(age){

//     if (age <= 18){
//     return true;
//     }
// }); 

// filter shorthand

let canVote = ages.filter((ages) => ages <= 18);

console.log(canVote);

// map

console.log("--- map");

let compNames = companies.map(function(company){

    return company.name;

});

console.log(compNames);

// Map() shorthand

let companyNames = companies.map((company) => {return `${company.name} [${company.start} - ${company.end}]`});
console.log(companyNames);


// reduce()

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log("Sum of all ages: ", ageSum);

// total years of companies using reduce

const totalyrs = companies.reduce((total, company) => total + (company.end - company.start),0);
console.log(totalyrs);