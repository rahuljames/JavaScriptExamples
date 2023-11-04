let time = 0;
let message = "";
if (time <= 6) {
  message = "GoodMorning";
} else if (time > 12 && time <= 17) {
  message = "Good Afternoon";
} else if (time > 17 && time <= 23) {
  message = "Good Evening";
} else {
  message = "Enter a Proper Time";
}
console.log(message);
