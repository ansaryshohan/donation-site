const donateHistory = [];

function getInputValue(id) {
  const value = parseFloat(document.getElementById(id).value);
  return value;
}

function getInnerText(id) {
  return document.getElementById(id).innerText;
}

function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

function handleDonation(btnID, inputId, donationAmountId, titleId) {
  document.getElementById(btnID).addEventListener("click", function () {
    const inputValue = getInputValue(inputId);
    if (isNaN(inputValue) || inputValue <= 0) {
      return alert("please provide a valid amount of money");
    }
    const totalBalance = parseFloat(getInnerText("total-balance"));
    if(totalBalance<inputValue){
      return alert("You don't have sufficient balance")
    }
    // donation balance
    const donationTillNow = parseFloat(getInnerText(donationAmountId));
    const donationAmount = donationTillNow + inputValue;
    setInnerText(donationAmountId, donationAmount.toFixed(2));

    // total balance
    const newBalance = totalBalance - inputValue;
    setInnerText("total-balance", newBalance.toFixed(2));
    document.getElementById(inputId).value = "";

    // history data handle
    const title = document.getElementById(titleId).innerText;
    const donationDetail = {
      id: donateHistory.length + 1,
      title,
      amount: inputValue,
      time: new Date(),
    };
    donateHistory.unshift(donationDetail);

    // handle modal
    document.getElementById(
      "modal-amount"
    ).innerHTML = `You have donated <span class="text-lg font-bold text-orange-400"> ${inputValue}</span> taka for ${title}`;

    document.getElementById("modal-div").classList.remove("hidden");
  });
}
