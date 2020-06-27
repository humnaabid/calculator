function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
    
}
function clearResult(){
    var clear= document.getElementById("result");
    result.value = "0" 

}
function getResult(){
    var result2=document.getElementById("result")
    result.value= eval(result.value)
}
function offResult(){
    var off= document.getElementById("result");
    result.value = ""

}


