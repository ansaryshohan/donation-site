const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const totalBalance = document.getElementById("total-balance");
const historySection = document.getElementById("history-section");
const donationSection = document.getElementById("donation-section");

//-----------History button toggle---------
function buttonToggleHandle() {
  donationBtn.addEventListener("click", function () {
    donationBtn.classList.add("active");
    historyBtn.classList.remove("active");
    historySection.classList.add("hidden");
    donationSection.classList.remove("hidden");
  });
  historyBtn.addEventListener("click", function () {
    historyBtn.classList.add("active");
    donationBtn.classList.remove("active");
    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden");
  });
}
buttonToggleHandle();

// ------- noakhali flood -----------
handleDonation(
  "noakhali-donation-btn",
  "noakhali-donation-input",
  "noakhali-donation-amount"
);
// --------- feni flood -------------
handleDonation(
  "feni-donation-btn",
  "feni-donation-input",
  "feni-donation-amount"
);
// --------- protest -------------
handleDonation(
  "quota-donation-btn",
  "quota-donation-input",
  "quota-donation-amount"
);
