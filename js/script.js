// Heart counter function
let totalHeart = 0;
const total = document.getElementById("total");
const heart = document.querySelectorAll(".count");

for (let i = 0; i < heart.length; i++) {
  heart[i].onclick = function () {
    totalHeart++;
    total.innerText = totalHeart;
  };
}

// Call History function
let reservedCoins = 100;
const totalCoin = document.querySelector("#coin-count");
const callHistory = document.querySelector("#call-history-list");

function makeCall(serviceName, serviceNumber) {
  if (reservedCoins < 20) {
    alert("Not enough coins! You need at least 20 coins to make a call.");
    return;
  }

  reservedCoins -= 20;
  totalCoin.innerText = reservedCoins;

  alert(`Calling ${serviceName} at ${serviceNumber}`);

  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString();

  const newHistory = document.createElement("div");
  newHistory.className =
    "history-content flex justify-between items-center p-4 mb-2 bg-[#FAFAFA] rounded-lg";

  newHistory.innerHTML = `
      <div>
        <h3 class="ff-inter text-lg font-semibold max-w-[215px] text-[#111] pb-1">${serviceName}</h3>
        <h4 class="text-lg font-normal text-[#5C5C5C]">${serviceNumber}</h4>
      </div>
      <h3 class="time text-lg font-normal text-[#111]">${time}</h3>`;

  callHistory.appendChild(newHistory);
}

function clearHistory() {
  callHistory.innerHTML = "";
}


// Copy counter function
let copyAmount = 0;
document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const hotlineNumber = button
      .closest(".card")
      .querySelector(".service-number").innerText;

    navigator.clipboard.writeText(hotlineNumber).then(() => {
      alert(`Number ${hotlineNumber} copied to clipboard!`);
      copyAmount++;
      document.getElementById("copyCount").innerText = `${copyAmount}`;
    });
  });
});
