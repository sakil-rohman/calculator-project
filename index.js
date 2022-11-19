document.getElementById("0").onclick=function(){
    document.getElementById("fst").value+="0";
}
document.getElementById("1").onclick=function(){
    document.getElementById("fst").value+="1";
}
document.getElementById("2").onclick=function(){
    document.getElementById("fst").value+="2";
}
document.getElementById("3").onclick=function(){
    document.getElementById("fst").value+="3";
}
document.getElementById("4").onclick=function(){
    document.getElementById("fst").value+="4";
}
document.getElementById("5").onclick=function(){
    document.getElementById("fst").value+="5";
}
document.getElementById("6").onclick=function(){
    document.getElementById("fst").value+="6";
}
document.getElementById("7").onclick=function(){
    document.getElementById("fst").value+="7";
}
document.getElementById("8").onclick=function(){
    document.getElementById("fst").value+="8";
}
document.getElementById("9").onclick=function(){
    document.getElementById("fst").value+="9";
}
document.getElementById("+").onclick=function(){
    document.getElementById("fst").value+="+";
}
document.getElementById("-").onclick=function(){
    document.getElementById("fst").value+="-";
}
document.getElementById("*").onclick=function(){
    document.getElementById("fst").value+="*";
}
document.getElementById("/").onclick=function(){
    document.getElementById("fst").value+="/";
}
document.getElementById("%").onclick=function(){
    document.getElementById("fst").value+="%";
}
document.getElementById("clean").onclick=function(){
    document.getElementById("fst").value="";
}
document.getElementById("remove").onclick=function(){
    let str = document.getElementById("fst").value;
    str = str.substring(0, str.length - 1);
    console.log(str);
    document.getElementById("fst").value=str;
}
document.getElementById("submit").onclick= function(){
    var a=document.getElementById("fst").value;
    var c= eval(a);
    document.getElementById("fst").value=c;
    
}

let time = new Date().toLocaleTimeString();
document.getElementById("time").textContent = time; 
var date = new Date().toDateString();
document.getElementById("date").textContent = date;