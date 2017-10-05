function isPalindrome(str) {
  if (!str || typeof str !== "string") {
    return false;
  }

  return checkPalindrome(str);
}

function checkPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); ++i) {
    if (str.charAt(i).toLowerCase() !== str.charAt(str.length - 1 - i).toLowerCase()) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
