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

    if (donateHistory.length > 0) {
      historySection.textContent= "";
      for (let element of donateHistory) {
        const newDiv = document.createElement("div");
        const classes = 'w-2/3 mx-auto rounded-lg border flex flex-col py-5 px-3';
        newDiv.classList.add(...classes.split(' '));
        
        newDiv.innerHTML = `
          <h3 class="card-title mb-2">${element.amount} Taka is Donated for ${element.title}</h3>
          <p class="text-base text-gray-500">Date : ${element.time}</p>
        `;
        historySection.appendChild(newDiv);
      }
    } else {
      historySection.innerHTML = `<div class="w-2/3 mx-auto rounded-lg border flex flex-col py-5 px-3 text-2xl font-medium text-black text-center">
          You have Not Donated Yet.
      </div>`;
    }
  });
}
buttonToggleHandle();

// ------- noakhali flood -----------
handleDonation(
  "noakhali-donation-btn",
  "noakhali-donation-input",
  "noakhali-donation-amount",
  "noakhali-title"
);
// --------- feni flood -------------
handleDonation(
  "feni-donation-btn",
  "feni-donation-input",
  "feni-donation-amount",
  "feni-title"
);
// --------- protest -------------
handleDonation(
  "quota-donation-btn",
  "quota-donation-input",
  "quota-donation-amount",
  "quota-title"
);

//---------- modal------------
document
  .getElementById("modal-close-btn")
  .addEventListener("click", function () {
    document.getElementById("modal-div").classList.add("hidden");
  });
