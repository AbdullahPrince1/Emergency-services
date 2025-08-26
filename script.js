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
        } else {
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই । কাল করতে কমপক্ষে ২০ কয়েন লাগবে");
        }
        // history
        
    });
}
//heart-count
const heartIcon = getId("heart-icon");
heartIcon.addEventListener("click", function () {
    const totalHeart = getId("total-heart").innerText;
    const calculatedHeart = Number(totalHeart) + 1;
    console.log(calculatedHeart);
    getId("total-heart").innerText = calculatedHeart;
});
