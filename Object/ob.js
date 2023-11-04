let camera = {
  brand: "canon",
  price: 35000,
  color: "black",
  mfg: 2019,
};
console.log(camera);

console.log(camera.brand);

//Non existing property

console.log(camera.megapixcel);

//
console.log(camera.price);
console.log(camera["price"]);

// nested object

let student = {
  name: "Rahul kumar",
  age: 26,
  course: "MBBS",
  address: {
    street: "Dollars Colony",
    city: "Bangalore",
    state: "KA",
  },
};

console.log(student);
console.log(student.address.street);

//curd operation of object

//create
let mobile = {};

mobile.brand = "Apple";
mobile.color = "silver";
mobile.price = 350000;

console.log(mobile);

//read

console.log(mobile.brand);

//update
console.log(mobile.price);
mobile.price = 450000;
console.log(mobile.price);

console.log(mobile);

//delete

delete mobile.brand;
console.log(mobile);

let Car = {
  color: "white",
  seats: 2,
  nitros: false,
};
let msg = "My car have['seats'] seats and it is of color ['color']";
console.log(msg);
console.log(Car);
