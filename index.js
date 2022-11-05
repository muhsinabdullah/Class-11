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
 
//get placeholder data from json placeholder
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
        console.log(data);

        let specifinder = data.find((user) =>{
            return user.id === 5;
        });
        console.log(specifinder);
  });
  