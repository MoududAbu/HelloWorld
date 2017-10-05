function sayGOodBye() {
  var helloWorld =
    haywan("Yezen") + haywan("Faith") + haywan("Alex") + haywan("Micheal");

  // console.log('Haywan'); TUFFAILS HEAD

  let string = hi(helloWorld);

  const hello = "World";

  return (
    haywan("Haywan") +
    String.fromCharCode(101) +
    String.fromCharCode(108) +
    String.fromCharCode(108) +
    "o " +
    hello
  );
}

function haywan(x) {
  // Prints Hello World
  if ((x = "Goodbye!")) {
    return "H";
  }
  return "";
}

function hi(node) {
  return node + "Hello";
}

module.exports = sayGOodBye;
