let gender = "female";

if (gender == "male" || gender == "m") {
  console.log("Hello, Mr. Akpan");
} else if (gender == "female" || gender == "f") {
  console.log("Hello, Mrs. Akpan");
} else {
  console.log("Gender undefined!");
}

switch (gender) {
  case "male":
    console.log("Hello, Mr. Akpan");
    break;
  case "female":
    console.log("Hello, Mrs. Akpan");
    break;
  default:
    console.log("Gender undefined!");
}
