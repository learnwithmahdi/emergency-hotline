let totalHeart = 0;
const total = document.getElementById("total");
const heart = document.querySelectorAll(".count");

for (let i = 0; i < heart.length; i++) {
  heart[i].onclick = function () {
    totalHeart++;
    total.innerText = totalHeart;
  };
}