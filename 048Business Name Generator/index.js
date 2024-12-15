function BusinessNameGenerator(a, b, c) {
  return a.concat(b).concat(c);
}

let a = prompt("Choose one Adjective from given :\n1.Crazy\n2.Amazing\n3.Fire");
let b = prompt("Choose one Shopname from given :\n1.Engine\n2.Food\n3.Garment");
let c = prompt("Choose one Suffix from given :\n1.Bros\n2.Limited\n3.Hub");

console.log(BusinessNameGenerator(a, b, c));
