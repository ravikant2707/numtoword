function con(n){
let once = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","ninteen"];
let tenth = ["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninty"];
n = n.toString();
console.log(n)
if(n.length>13){
    alert("enter max 13 digit no.")
}
else{
let str = "";
n.slice(-13,-12)?str+=once[n.slice(-13,-12)] + " trillion ":"";

// ===========================
n.slice(-12,-11)?str+=once[n.slice(-12,-11)] + " hundreds ":"";
if(n.slice(-11,-10)!=0 ){
if(n.slice(-11,-10)==1){
    str+=once[n.slice(-11,-9)] + " billion ";
}
else { n.slice(-11,-10)?str+=tenth[n.slice(-11,-10)]+" ":str+="";
 
n.slice(-10,-9)?str+=once[n.slice(-10,-9)] + " billion ":"";


}
}
else{
    n.slice(-10,-9)?str+=once[n.slice(-10,-9)] + " billion ":"";

}


// ===================

n.slice(-9,-8)?str+=once[n.slice(-9,-8)] + " hundreds ":"";
if(n.slice(-8,-7)!=0 ){
if(n.slice(-8,-7)==1){
    str+=once[n.slice(-8,-6)] + " million ";
}
else { n.slice(-8,-7)?str+=tenth[n.slice(-8,-7)]+" ":str+="";
 
n.slice(-7,-6)?str+=once[n.slice(-7,-6)] + " million ":"";


}
}
else{
    n.slice(-7,-6)?str+=once[n.slice(-7,-6)] + " million ":"";

}
 
// ======================
n.slice(-6,-5)?str+=once[n.slice(-6,-5)] + " hundreds ":"";
if(n.slice(-5,-4)!=0 ){
if(n.slice(-5,-4)==1){
    str+=once[n.slice(-5,-3)] + " thousands ";
}
else { n.slice(-5,-4)?str+=tenth[n.slice(-5,-4)]+" ":str+="";
n.slice(-4,-3)?str+=once[n.slice(-4,-3)]+" thousands ":str+="";


}
}
else{
n.slice(-4,-3)?str+=once[n.slice(-4,-3)]+" thousands ":str+="";

}
 
// ===========================
n.slice(-3,-2)!=0?str+=once[n.slice(-3,-2)]+" hundred ":str+="";
if(n.slice(-2,-1)==1){
    str+=once[n.slice(-2)];
}
else { n.slice(-2,-1)?str+=tenth[n.slice(-2,-1)]+" ":str+="";
n.slice(-1)?str+=once[n.slice(-1)]:str+="";}
console.log(str);
}
}
con(056124578);


 