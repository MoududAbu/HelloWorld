function isPalindrome(str) {
  if (!str || typeof str !== "string") {
    return false;
  }

  return checkPalindrome(str);
}

function checkPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); ++i) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
