function rot13(str) {
  const lookUp13 = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
  };
  let decoded = "";
  let incoded;
  let strArray = str.split("");

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === " ") {
      decoded = decoded + " ";
    } else if (!strArray[i].match(/[a-z]/i) && strArray[i] !== " ") {
      decoded = decoded + strArray[i];
    } else {
      for (incoded in lookUp13) {
        if (incoded.toString() === strArray[i]) {
          decoded = decoded + lookUp13[incoded];
        }
      }
    }
  }
  return decoded;
}

function runCaesar() {
  const decoded = rot13("SERR CVMMN!");
  console.log("this: \"SERR CVMMN!\" is decoded as: " + decoded);
}

