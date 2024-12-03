function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterFunc = greet("Hello");

greeterFunc("Shoaib");

greet("Salam")("Tahir");

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArrow("Assalam u alikum")("Shoaib");
