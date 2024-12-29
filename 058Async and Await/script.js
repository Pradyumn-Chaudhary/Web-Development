// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("455");
//     }, 3000);
//   });
// }

async function getData() {
  // Simulate getting data from server
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let data = await x.json();
  console.log(x);
  // console.log(data);
  return data;
}

async function main() {
  console.log("Hey!");

  let data = await getData();
  console.log(data);

  // data.then(() => {
  //     console.log("Hello");
  // });

  console.log("Hello");
}

main();
