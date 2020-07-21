function romannumber(number) {
    const numbersAndRomans ={M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let romanNumber = "";
    let romanIndex;
    for(romanIndex in numbersAndRomans){
      while(number >= numbersAndRomans[romanIndex]){
        romanNumber = romanNumber + romanIndex;
        number = number - numbersAndRomans[romanIndex];
      }
    }
    return romanNumber;
  }
  
  function runRoman() {
    const nrInRoman = romannumber(2);
    console.log("The number 2 is converted to " + nrInRoman +" in Roman number");
  }