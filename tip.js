

function getValue() {
    let billAmount =parseInt(document.getElementById("billAmount").value) // To allow only numbers as input
    

    let services =(document.getElementById("services").value); // calculates the bill and service
    let tipAmount= billAmount * services;
        modalShow(tipAmount);


}

 
    
    
    


    
 
 


