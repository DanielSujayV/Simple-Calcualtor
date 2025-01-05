function displayValue(val){
    document.getElementById("display").value=document.getElementById("display").value+val;
}
function clearValues(){
    document.getElementById("display").value="";
}
function resultat(){
     var vedenneya=document.getElementById("display").value;
     var result=eval(vedenneya);
     document.getElementById("display").value=result;

}
