// Functions accepting callback functions

const removeSpace = (str) => str.replace(/ /g, "");

const firstUpperCase = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
// Higher Order Function
function transformer(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer("JavaScript is the best!", firstUpperCase);
transformer("JavaScript is the best!", removeSpace);

const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);
