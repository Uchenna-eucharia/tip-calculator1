

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

  //let numberOfPeople = parseInt(document.getElementById("numberOfPeople").value) // To allow only numbers as input
  let numberOfPeople = $("#numberOfPeople").val();

  //checks if the bill entered || number of people sharing the bill is a valid number
  if ($.isNumeric(billAmount && numberOfPeople)) {
    //let services = (document.getElementById("services").value); // calculates the bill and service
    let servicesRate = $("#services").val();

    let tipAmount = billAmount * servicesRate/ numberOfPeople ; // the maths behind the calculator

    lblAmount.text(tipAmount + ' each'); // The tipAmount and the sharing of the bill
    //shows the modal
    $("#exampleModal").modal("show");
  }
  else if (numberOfPeople === "" || numberOfPeople < 1 ) { 
     numberOfPeople === 1
      

      let servicesRate = $("#services").val();

      let tipAmount = billAmount * servicesRate;
  
      lblAmount.text(tipAmount);

      $("#exampleModal").modal("show");

  }
    else {
    //shows the modal
    $("#exampleModal").modal("show");

    lblAmount.text("Please enter a valid bill amount");
    //use the return key to stop the code from excuting
    return;
  }  
}
