function compute()
{
    //initializing all variables that will be used
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);

  //if statement to check if the principal input is a valid input  
    if(principal<=0)
    {
        alert("Enter a positive number")
        
        document.getElementById('principal').style.borderColor = "red";
    }
    else{
        var interest = principal * years * rate /100;
        var amount =parseInt(interest);
        document.getElementById("result").innerHTML="\<br\> If you deposit <mark> "+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"


    }
    
   
}
//updates the percentage on the slider to display 
function updateRate(event)
{
        var rateval = document.getElementById("rate").value
        document.getElementById("rate_val").innerText=rateval + '%';
} 

function hide()
{
    if(document.getElementById("result").innerHTML!="")
    {
        document.getElementById("result").innerHTML=""
    }
    else{
        compute();
    }

}
   
    

        