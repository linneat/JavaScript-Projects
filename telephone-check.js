function telephoneCheck(phonenr) {
  let numberArray = [];
  let numberCounter = 0;
  let balanceP = 0;
  for (let i = 0; i < phonenr.length; i++) {
    if (
      !(phonenr[i] >= "0" && phonenr[i] <= "9") &&
      phonenr[i] !== "-" &&
      phonenr[i] !== "(" &&
      phonenr[i] !== ")" &&
      phonenr[i] !== " "
    ) {
      return false;
    } else if (phonenr[i] !== " ") {
      numberArray.push(phonenr[i]);
    }
  }
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] >= "0" && numberArray[i] <= "9") {
      numberCounter += 1;
    }
    if (numberArray[i] === "(") {
      balanceP = balanceP + 1;
    }
    if (numberArray[i] === ")") {
      balanceP = balanceP - 1;
    }
  }

  if (numberCounter === 11) {
    if (numberArray[0] === "1") {
      if (numberArray[1] === "(") {
        if (numberArray[5] === ")") {
          return true;
        } else {
          return false;
        }
      } else if (balanceP === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else if (numberCounter === 10) {
    if (numberArray[0] === "(") {
      if (numberArray[4] === ")") {
        return true;
      } else {
        return false;
      }
    } else if (balanceP === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function runTelephone() {
  const americanNr = telephoneCheck("1 555)555-5555");
  console.log("The nr \"1 555)555-5555\" is an american phone number: " + americanNr);
}

