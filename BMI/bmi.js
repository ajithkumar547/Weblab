
function cal(){
    let a;
    h=document.getElementById("1").value;
    if(h>15)
    {
        alert("Enter height in metres");
    }
    w=document.getElementById("2").value;
    a = w/(h*h);
    if(a<18.5)
    {
        document.getElementById("under").innerHTML="Your BMI is"+a.toFixed(2)+" !!! UNDERWEIGHT !!!";  
    }
    if((a>=18.5)&&(a<25))
    {
        document.getElementById("under").innerHTML="Your BMI is"+a.toFixed(2)+" !!! IDEALWEIGHT !!!";
    }
    if((a>=25)&&(a<30))
    {
        document.getElementById("under").innerHTML="Your BMI is"+a.toFixed(2)+" !!! OVERWEIGHT !!!"; 
    }
    if(a>=30)
    {
        document.getElementById("under").innerHTML="Your BMI is"+a.toFixed(2)+" !!! OBESE !!!";
    }
}
function reset(){

    document.getElementById("1").value=" ";
    document.getElementById("2").value=" ";
    document.getElementById("under").innerHTML="RESULT";
}