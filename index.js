//generate an array of 10 random numbers
let randomNumbers=[
    10,3,1,2,5,4,6,8,9,7
];
    console.log(randomNumbers);

//Mapped array
    let mappedNumbers = randomNumbers.map((number , index)=>{
    console.log(number,index);
});

//filter numbers
let filterNumbers = randomNumbers.filter((number,index)=>{
    return number > 5
});
    console.log(filterNumbers);

//find numbers
let findNumbers = randomNumbers.find((number,index)=>{
    return number >5;
});
    console.log(findNumbers);
 
