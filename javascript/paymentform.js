window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Payment Successful. Thank you for purchasing in our store. 😊");
      return true;
   }
   
   document.getElementById("tng").onclick = turnOnTNG;
   document.getElementById("bankin").onclick=turnOnBankIn;
   document.getElementById("cdcard").onclick=turnOnCDcard;
}


function turnOnTNG() {
   document.getElementById("tngInfo").disabled=false;
   document.getElementById("bankInfo").disabled=true;
   document.getElementById("cardInfo").disabled=true;
}

function turnOnBankIn() {
    document.getElementById("tngInfo").disabled=true;
    document.getElementById("bankInfo").disabled=false;
    document.getElementById("cardInfo").disabled=true;
}

function turnOnCDcard() {
    document.getElementById("tngInfo").disabled=true;
    document.getElementById("bankInfo").disabled=true;
    document.getElementById("cardInfo").disabled=false;
}