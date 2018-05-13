const companies = [
    {name: "company1", category: "finance", start: 1980, end:2005},
    {name: "company2", category: "auto", start: 1982, end:1993},
    {name: "company3", category: "technology", start: 1995, end:20017},
    {name: "company4", category: "finance", start: 1999, end:2014},
    {name: "company5", category: "finance", start: 1975, end:2002},
    {name: "company6", category: "auto", start: 1982, end:1999},
    {name: "company7", category: "technology", start: 1988, end:2000},
    {name: "company8", category: "auto", start: 2003, end:2011},
    {name: "company9", category: "technology", start: 1997, end:2009}
];


const ages = [5, 12, 32, 15, 45, 97, 7, 23, 44, 37, 67, 29, 30, 41, 48, 53, 10, 89];

// //forEach 
// for(let f=0; f<companies.length; f++){
//     console.log(companies[f]);
// }

// companies.forEach(function(company){
//     console.log(company);
// })



// //filter

// //filter age>21
// let canDrink =[];
// for(let f=0;f<ages.length;f++){
//     if(ages[f]>=21){
//         canDrink.push(ages[f]);
//     }
// }
// console.log(canDrink);

// const canDrink2 = ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// });

// console.log(canDrink2);

// const canDrink3 = ages.filter(age => age>=21);
// console.log(canDrink3);

// //filter auto companies
// const auto = companies.filter(function(company){
//     if(company.category ==="auto"){
//         return true;
//     }
// });

// const auto2 = companies.filter(company => company.category ==="auto");
// console.log(auto2);

// //filter 80s companies 
// const eighties = companies.filter(company => (company.start >= 1980 && company.start <1990));
// console.log(eighties); 

// //filter companies wich was for more than 10 years
// const lastMoreThanTen = companies.filter(company => company.end-company.start >=10);
// console.log(lastMoreThanTen);



// //map
// //get company names and put in new array
// const companyNames = companies.map(function(company){
//     return company.name;
// });
// console.log(companyNames);

// //square ages
// const agesSquare = ages.map(age => age*age);
// console.log(agesSquare);



// //sort
// //sort companies by start year
// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start>c2.start){
//         return 1;}
//         else {
//         return -1;}
// });
// console.log(sortedCompanies);

// const sortedCompanies2 = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies2);

// //sort ages
// const sortedAges = ages.sort((a,b) => a-b);
// console.log(sortedAges);

// //sort descending ages
// const sortedAges2 = ages.sort((a,b) => b-a);
// console.log(sortedAges2);



// //reduce
// //sum ages
// let agesSum = 0;
// for(f=0; f<ages.length; f++){
//     agesSum+=ages[f];
// };
// console.log(agesSum);

// const ageSum2 = ages.reduce(function(total, age){
//     return total + age;
// },0);
// console.log(ageSum2);

// const ageSum3 = ages.reduce((total,age)=>total+age,0);
// console.log(ageSum3);

// //get total years of all companies
// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end-company.start);
// },0);
// console.log(totalYears);



// //Combine Methods
// const combined = ages
//     .map(age => age*2) //multiple by 2 all ages
//     .filter(age => age>=40) //filter, only higher than 40
//     .sort((a,b) => a-b) //sort
//     .reduce((a,b) => a+b, 0); //sum all ages

// console.log(combined);