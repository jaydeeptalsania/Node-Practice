//=====================    Array map method ================================
const age = [12,32,43,53,27,38];

const doubleAge = age.map((e)=>{    // here we are modifying existing array and it will return a new array
   return e*2;
});

console.log(doubleAge);

//====================== Array filter method =================================

 const price = [200 , 500 , 600 , 1000 ,124 ,330];

 const newPrice = price.filter((e)=>{  // here we are filtering existing array and it will return a subset of that array
    if(e > 500){
        return e;
    }
 })

 console.log(newPrice);