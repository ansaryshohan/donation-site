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

function handleDonation(btnID, inputId, donationAmountId) {
  document.getElementById(btnID).addEventListener("click", function () {
    const inputValue = getInputValue(inputId);
    if (isNaN(inputValue) || inputValue <= 0) {
      return alert("please provide a valid amount of money");
    }
    const donationTillNow = parseFloat(getInnerText(donationAmountId));

    const donationAmount = donationTillNow + inputValue;

    setInnerText(donationAmountId, donationAmount);

    const totalBalance = parseFloat(getInnerText("total-balance"));
    const newBalance = totalBalance + inputValue;
    setInnerText("total-balance", newBalance);
    document.getElementById(inputId).value= "";
  });
}
