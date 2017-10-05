const testSubject = require("../src//HelloWorld");

test("Returns Hello World", function() {
  expect(testSubject()).toBe("Hello World");
});
