function palindrome(str) {
  let stripped = str.replace(/[^A-Za-z0-9]/g, "");
  let lowStripped = stripped.toLowerCase();
  let pointer1 = lowStripped.charAt(0);
  let pointer2 = lowStripped.charAt(lowStripped.length - 1);
  let counter1=0;
  let counter2 = lowStripped.length-1;

  for (let i = 0; i <= lowStripped.length / 2; i++) {
    if (pointer1 !== pointer2) {
      return false;
    }
    counter1 = counter1+1;
    counter2 = counter2-1;
    pointer1 = lowStripped.charAt(counter1);
    pointer2 = lowStripped.charAt(counter2);
  }
  return true;
}

function runPalindrome() {
  const isPalindrome = palindrome("lallal");
  console.log("the word: \"lallal\" is palindrome: " + isPalindrome );
}
