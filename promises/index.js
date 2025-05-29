// Task 1 : store to Machine seperate Promises

// Task 2 : Machine to table seperate Promises

// Task 3 : async and await

// Task 4 : online API  [ process ] [ result ]

// Task 5 : async and await online API call line by line [timer]

// Task 6 : print result

// task-1

const store = true;

const coffeeBeansInStore=()=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("coffee beans in store!");
      resolve();
    }, 2000);
  });
}

const coffeeBeansRoast=()=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("coffee beans roast!");
      resolve();
    }, 2000);
  });
}

const coffeeInMachine=()=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("coffee in Machine!");
      resolve();
    }, 2000);
  });
}

const task1Run=async()=>{
    await coffeeBeansInStore()
    await coffeeBeansRoast()
    await coffeeInMachine()
}

//task 2
const addMilk=()=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("coffee add milk!");
      resolve();
    }, 2000);
  });
}

const addSugar=()=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("coffee add sugar!");
      resolve();
    }, 2000);
  });
}

const addIceCream=()=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("coffee add icecream!");
      resolve();
    }, 2000);
  });
}

const addIceCube=()=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("coffee add icecube!");
      resolve();
    }, 2000);
  });
}

const serveCoffee=()=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("coffee on table!");
      resolve();
    }, 2000);
  });
}

const Task2Run=async()=>{
    await addMilk()
    await addSugar()
    await addIceCream()
    await addIceCube()
    await serveCoffee()
}

//task 3
const makeCoffee=async()=> {
  await task1Run()
  await Task2Run()
}

//task 4

 const fetchCoffeeStep=async(id)=> {
  const data = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
  return {
    process: `Step ${id} processed`,
    result: data.title,
  };
}

//task 5

 const processOnlineSteps=async()=> {
  const stepCount = 5;
  const results = [];

  for (let i = 1; i <= stepCount; i++) {
    await new Promise((res) => setTimeout(res, 2000));
    const result = await fetchCoffeeStep(i);
    results.push(result);
  }

  return results;
}

//task 6

 const runAllTasks=async()=> {
  if (!store) {
    console.log("store has been closed!");
    return;
  }

  await makeCoffee();

  const onlineResults = await processOnlineSteps();

  console.log("\n Final Results from API Calls ");
  onlineResults.forEach((r) => {
    console.log(`${r.process} -> ${r.result}`);
  });
}

runAllTasks();