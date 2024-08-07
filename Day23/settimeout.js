function sum(a, b) {
  const c = a + b;
  console.log(c);
  return c;
}

//sum(2,3);

//setTimeout(()=>sum(4,5),5000) //single time
//clearTimeout
let count = 0;
const intervalID = setInterval(() => {
  count = count + 1;
  sum(6, 8);
  console.log(count);
  if (count === 10) {
    clearInterval(intervalID);
  }
}, 1000); // continuous
//clearInterval

setTimeout(() => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
    }, 5000);
  }, 1000);
}, 3000);

//0) create a variable for your promise
//1) new Promise - new Promise()
//2) add arrow Function -new Promise(()=> {})
//3) add two arguments - resolve and reject
//4) move the actual old logic inside arrow body
//5) Find the point where the time out ends , call resolve for sucess and call reject for failure
//6) If you want to pass more external arguments - wrap above promise inside an another arrow function

const setTimeoutPromise = (timeInterval) => new Promise((resolve, reject) => {
    setTimeout(()=>resolve(),timeInterval)
});

setTimeoutPromise(3000)
    .then(()=>{
        console.log("A");
        return setTimeoutPromise(1000)
    })
    .then(()=>{
        console.log("B");
        return setTimeoutPromise(5000)
    })
    .then(()=>{
        console.log("C");
    })
    .then(()=>{
        console.log("C");
    })
    .then(()=>{
        console.log("C");
    })
    .then(()=>{
        console.log("C");
    })
    .then(()=>{
        console.log("C");
    })
    
