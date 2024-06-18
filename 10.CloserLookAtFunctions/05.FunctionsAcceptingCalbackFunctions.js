// Functions accepting callback functions

const removeSpace = (str) => str.replace(/ /g, "");

const firstUpperCase = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join();
};

function transform(str, fn) {
  console.log(`Before transforming: ${str}`);
  return fn(str);
}

console.log(
  `After transforming: ${transform(
    "JavaScript is the best programming language",
    removeSpace
  )}`
);
