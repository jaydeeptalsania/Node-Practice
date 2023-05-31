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

 //======================= Spread opretors =======================================

  const arr1 = [1,2,3,4];
  const arr2 = [5,6,7,8];

  const arr3 = [...arr1,...arr2];   // combine two arrays with spread operators
  console.log(typeof arr3);

  //======================== rest operators =======================================

  const demoFunc = (name, age, ...args) =>{  // it will take first and second parameter and creates an array of the remaining parameters
        let sum = 0;
        let i;
        for(i = 0 ; i < args.length; i++){
           sum = sum + args[i];
        }
        console.log(name);
        console.log(age);
        console.log(sum);
  }

  demoFunc("Jayd",33,10,20,30); // Here the function will consider "Jayd" as "name" & "33" as "age" , & for the rest of the values it will store in args(array)


  