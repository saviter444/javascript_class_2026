let is_raining = true;
let have_umbrella = false;
let friend_has_a_car = false;

if (is_raining && have_umbrella) {
  console.log("Come to Class!");
} else if (is_raining) {
  if (friend_has_a_car) {
    console.log("Borrow the car and come to class");
  } else {
    console.log("Sleep More!");
  }
} else {
  console.log("DEFAULT");
}
