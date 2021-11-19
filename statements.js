function idfunc (){
    document.getElementById("demo").innerHTML = `document.getElementById("demo").innerHTML`;

}
function func2 (event){
    alert(typeof(event.target.value)+'  تایپش همیشه استرینگ هست  '+event.target.value.length +'اینم طول رشته ');
}
function func3(){
    var age = 5;   
    while(age<10 && age >=1){
    age = Number(prompt("اگر عدد بین یک تا ده بدی حلقه وایل ادامه داره"));

    }
}
function func4 () {
    var age ;
    age = Number(prompt("سن خود را وارد کنید به عدد؟"));
    age > 18 ? alert("شما به  سایت دسترسی دارین") : alert("شما به سایت دسترسی ندارین");

}
function func5 (){
    var age ;
    age = Number(prompt("سن خود را وارد کنید به عدد؟"));
    switch (age){
        case 10 :
            alert("کوچولو سلام");
            break
        default:        
            alert("سلام چطوری؟");
    }

}
var selfinvoke = function (){
    alert('این یک تابع که به صورت اکسپرشن تعریف شده و سلف اینوک شده است') ;
}();
function func6(){
    var str = ""
    for(var i=0 ; i <10 ;i++){
      str += (i + " " );     
    };
    document.getElementById("demo6").innerHTML =str;
}
var x;
var iii = {
    name : "hossein",
    age : 31 ,
    [x] : true
}
function func7 () {
    document.getElementById("demo7").innerHTML= JSON.stringify(iii);

}
function func8 () {
    var d  = new Date();    
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var text = h + " : " + m + " : " + s;
    document.getElementById("demo8").textContent = text;
    setTimeout(func8 , 1000);
}
func8();