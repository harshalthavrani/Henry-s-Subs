var errors = "";
var postcodere = /^([A-Z][0-9][A-Z][0-9][A-Z][0-9])$/;
var emailre = /^()$/;
function validate()
{
    if(document.getElementById("name").value=="")
    {
        errors += "Customer's Name Cannot be balnked" + "</br>" + "</br>";
    }
     if(document.getElementById("email").value=="")
     {
         errors +=" Customer's Email Cannot be Blanked" + "</br>" + "</br>";
     }
     if(document.getElementById("phone").value=="")
     {
         errors +="Customer's Phone Cannot be Blanked" + "</br>" + "</br>";
     }
     if(document.getElementById("address").value=="")
     {
         errors += "Customer's Address Cannot be balnked" + "</br>" + "</br>";
     }
     if(document.getElementById("city").value=="")
     {
         errors += "Customer's City Cannot be balnked" + "</br>" + "</br>";
     }
     if(document.getElementById("postcode").value=="")
     {
         errors += "Customer's Postal Code Cannot be balnked" + "</br>" + "</br>";
     }
     if(postcodere.test(document.getElementById("postcode").value) == false)
         {
             errors +="Postal Code is not valid" + "</br>" + "</br>";
         }
     if (isNaN(document.getElementById("hookladder").value)) {
             errors += "The product field is only accepts a number" + "<br/>" + "</br>";
         }
     if (isNaN(document.getElementById("steak").value)) {
             errors += "The product field is only accepts a number" + "<br/>" + "</br>";
         }
     if (isNaN(document.getElementById("meatball").value)) {
             errors += "The product field is only accepts a number" + "<br/>" + "</br>";
         }   
    if(errors!="")
    {
        document.getElementById("errors").innerHTML=errors;
        return false;
    }
}