const sayHello = require("../src/HelloWorld");

test("Returns Hello World", function() {
  expect(sayHello()).toBe("Hello World");
});
