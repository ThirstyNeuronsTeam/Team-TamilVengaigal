/* setTimeout(() => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
    }, 5000);
  }, 1000);
}, 3000); */

//fetch promise
//XMLHttpRequest- event based
//setimtoeout - callback based


//1) new Promise - new Promise()
//2) add arrow Function -new Promise(()=> {})
//3) add two arguments - resolve and reject
//4) move the actual oldl logic inside arrow body
//5) Find the point where the time out ends , call resolve for sucess and call reject for failure
//6) If you want to pass more external arguments - wrap above promise inside an another arrow function
const timeoutPromise = (timeInterval) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("resolve called");
      resolve();
    }, timeInterval);
  });

timeoutPromise(4000)
  .then(() => {
    console.log("A");
    return timeoutPromise(2000);
  })
  .then(() => {
    console.log("B");
    return timeoutPromise(5000);
  })
  .then(() => {
    console.log("C");
  });
