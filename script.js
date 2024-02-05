function buttonclick(val){
    document.getElementById("input").value+=val
}
function buttonclear(){
    document.getElementById("input").value =""
}
function buttonanswer(){
    var values =document.getElementById("input").value
    var result=eval(values)
    document.getElementById("input").value = result
}