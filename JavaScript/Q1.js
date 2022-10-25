let s = "A man, a plan, a canal: Panama";

const checkIfPalindrome = (s) => {
  const lowStr = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  const revStr = lowStr.split("").reverse().join("");
  return revStr === lowStr;
};

console.log(checkIfPalindrome(s));
s = "race a car";
console.log(checkIfPalindrome(s));
