function calculateLoan() {
  let amount = document.getElementById("loanAmount").value;
  let months = document.getElementById("loanMonths").value;
  let rate = document.getElementById("loanRate").value / 100;

  if (!amount || !months || !rate) {
    document.getElementById("loanResult").innerText = "Lütfen tüm alanları doldurun!";
    return;
  }

  let monthly = (amount * rate) / (1 - Math.pow(1 + rate, -months));
  document.getElementById("loanResult").innerText =
    "Aylık Ödeme: " + monthly.toFixed(2) + " ₺";
}
