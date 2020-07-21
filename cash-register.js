function checkCashRegister(price, cash, cid) {
  let difference = cash - price;

  let statusObject = {
    status: undefined,
    change: [],
  };
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid = totalCid + cid[i][1];
  }

  let cidNumber = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  for (let i = cid.length - 1; i >= 0; i--) {
    if (difference >= cidNumber[i]) {
      let usedNumber = 0;
      while (difference >= cidNumber[i] && usedNumber < cid[i][1]) {
        difference = difference - cidNumber[i];
        usedNumber = usedNumber + cidNumber[i];
        if (difference < 0.01 && difference > 0.0049) {
          difference = 0.01;
        }
      }
      statusObject.change.push([cid[i][0], usedNumber]);
    }
  }
  if (totalCid === cash - price) {
    statusObject.status = "CLOSED";
    statusObject.change = cid;

    return statusObject;
  }

  if (difference === 0) {
    statusObject.status = "OPEN";

    return statusObject;
  } else if (difference > totalCid || difference > 0) {
    statusObject.status = "INSUFFICIENT_FUNDS";
    statusObject.change = [];

    return statusObject;
  } else {
    statusObject.status = "CLOSED";
    return statusObject;
  }
}

function runCash() {
  const moneyBack = checkCashRegister(3.26, 100, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ]);
  console.log("status: " + moneyBack.status + " change: " + moneyBack.change);
}
