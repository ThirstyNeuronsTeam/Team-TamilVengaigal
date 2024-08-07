const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
  .then((serverData) => {
    return serverData.json();
  })
  .then((x) => console.log(x));


