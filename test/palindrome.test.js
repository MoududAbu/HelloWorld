const isPalindrome = require("../src/palindrome");

test("should return false if empty string provided", function() {
  expect(isPalindrome("")).toBe(false);
});

test("should return false if not string value provided", function() {
  expect(isPalindrome(123)).toBe(false);
});

test("should return false if no string provided", function() {
  expect(isPalindrome()).toBe(false);
});

test("should return false if string is undefined provided", function() {
  expect(isPalindrome(undefined)).toBe(false);
});

test("should return true if only single character provided", function() {
  expect(isPalindrome("a")).toBe(true);
});

test('should return true if string == "racecar"', function() {
    expect(isPalindrome("racecar")).toBe(true);
});

test('should return false if string == "garbage"', function() {
    expect(isPalindrome("garbage")).toBe(false);
});

test('should return true if string == "Ada"', function() {
    expect(isPalindrome("Ada")).toBe(true);
});