function getId(id) {
  return document.getElementById(id);
}
const btns = document.getElementsByClassName("call-btn");
for (const btn of btns) {
  btn.addEventListener("click", function () {
    const number = btn.parentNode.parentNode.children[1].children[2].innerText;
    const serviceName =
      btn.parentNode.parentNode.children[1].children[1].innerText;
    const serviceTitle =
      btn.parentNode.parentNode.children[1].children[0].innerText;
    const totalCoin = getId("total-coin").innerText;
    if (totalCoin >= 20) {
      alert(`📞 Calling ${serviceName} service ${number}...`);
      const callCharge = Number(totalCoin) - 20;
      getId("total-coin").innerText = callCharge;
      // history
      const time = new Date().toLocaleTimeString();
      const serviceHistory = getId("service-history");
      const historyElement = document.createElement("div");
      historyElement.innerHTML = `
                  <div class="flex justify-between mb-2 items-center p-4 bg-gray-100 rounded-lg">
                    <div>
                        <h1>${serviceTitle}</h1>
                        <span>${number}</span>
                    </div>
                    <span>${time}</span>
                </div>
        `;
      serviceHistory.append(historyElement);
      const navhistoryElement = document.createElement("div");
      navhistoryElement.innerHTML = `
       <div class="flex justify-between mb-2 items-center p-4 bg-gray-100 rounded-lg">
                    <div>
                        <h1>${serviceTitle}</h1>
                        <span>${number}</span>
                    </div>
                    <span>${time}</span>
                </div>
      `;
      const appendHere = getId("appendHere");
      appendHere.append(navhistoryElement);
      // .remove
      const clearBtn = getId("clear-btn");
      clearBtn.addEventListener("click", function () {
        serviceHistory.remove(historyElement);
      });
      const navclearBtn = getId("nav-history-clear-btn");
      navclearBtn.addEventListener("click", function () {
        appendHere.remove(historyElement);
      });
    } else {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই । কাল করতে কমপক্ষে ২০ কয়েন লাগবে");
    }
  });
}
//heart-count
const heartbtns = document.getElementsByClassName("heart-icon");
for (const heartbtn of heartbtns) {
  heartbtn.addEventListener("click", function () {
    const totalHeart = getId("total-heart").innerText;
    const calculatedHeart = Number(totalHeart) + 1;
    getId("total-heart").innerText = calculatedHeart;
  });
}
//copy count
const copyBtns = document.getElementsByClassName("copy-btn");
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    const copyNumber =
      copyBtn.parentNode.parentNode.children[1].children[2].innerText;
    navigator.clipboard.writeText(copyNumber);
    alert(`নম্বর কপি হয়েছে ${copyNumber}`);
    const totalCopy = getId("total-copy").innerText;
    const copyCount = Number(totalCopy) + 1;
    getId("total-copy").innerText = copyCount;
  });
}
const historyBtn = getId("nav-history-btn");
historyBtn.addEventListener("click", function () {
  const showHistory = getId("collapsed-history");
  showHistory.style.top = "0px";
  const collapsebtn = getId("nav-collapssed-btn");
  collapsebtn.addEventListener("click", function () {
    showHistory.style.top = "-1000px";
  });
});
