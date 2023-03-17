document.getElementById("reset").disabled = true;

function active() {
  document.getElementById("reset").disabled = false;
}

function enterPressed(event) {
  if (event.keyCode == 13) {
    document.getElementById("reset").disabled = false;
    customTips();
  }
}

function customTips() {
  var customTip = document.getElementById("custom").value;
  getTip(customTip / 100);
}

function basic() {
  document.getElementById("people").style.border = "none";
  document.getElementById("warning").innerHTML = "";
}

function getTip(percentage) {
  var bill = document.getElementById("bill").value;
  var people = document.getElementById("people").value;
  if (people == 0 || "") {
    document.getElementById("warning").innerHTML = "Can't be zero";
    document.getElementById("people").style.border = "2px solid red";
    document.getElementById("custom").value = "";
  } else {
    var tips = (bill * percentage) / people;
    var perPeopleBill = bill / people;
    var total = tips + perPeopleBill;

    document.getElementById("tips").innerHTML = "$" + tips.toFixed(2);
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
  }
}

function reset() {
  document.getElementById("bill").value = "";
  document.getElementById("custom").value = "";
  document.getElementById("people").value = "";
  document.getElementById("tips").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  document.getElementById("warning").innerHTML = "";
  document.getElementById("tips").innerHTML = "$0.00";
  document.getElementById("total").innerHTML = "$0.00";
  document.getElementById("reset").disabled = true;
  document.getElementById("people").style.border = "none";
}
