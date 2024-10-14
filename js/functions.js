function isMaxLength (string, len) {
  return string.length <= len;
}

function isPalindrome (string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString === string;
}
