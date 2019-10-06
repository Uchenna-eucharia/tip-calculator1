function getValue() {
  let billAmount = parseInt(document.getElementById("billAmount").value); // To allow only numbers as input

  let services = document.getElementById("services").value; // calculates the bill and service
  let tipAmount = billAmount * services;
  alert(tipAmount);
}

$(document).ready(function() {
  //this event will be raised when the user clicks the calculate button
  $("#calculate").on("click", function(event) {
    //var calcButton = $(this);

    CalculateTip();
  });
});

function CalculateTip() {
  //let billAmount = parseInt(document.getElementById("billAmount").value) // To allow only numbers as input
  let billAmount = $("#billAmount").val();

  //gets the label in the modal
  let lblAmount = $("#amountToPay");
  //clear the last amount in the modal
  lblAmount.text("");

  //checks if the bill entered is a valid number
  if ($.isNumeric(billAmount)) {
    //let services = (document.getElementById("services").value); // calculates the bill and service
    let servicesRate = $("#services").val();

    let tipAmount = billAmount * servicesRate;

    lblAmount.text(tipAmount);
    //shows the modal
    $("#exampleModal").modal("show");
  } else {
    //shows the modal
    $("#exampleModal").modal("show");

    lblAmount.text("Please enter a valid bill amount");
    //use the return key to stop the code from excuting
    return;
  }
}
