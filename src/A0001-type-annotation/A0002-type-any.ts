// utlizar any apenas em último caso
function showMassage(msg:any){
    return msg;
    // todos funcionarão, pois meu parâmetro é do tipo any
    console.log(showMassage("Olá mundo!"));
    console.log(showMassage(1));
    console.log(showMassage([1,2,3,4]));
    console.log(showMassage([1, "laranja", 3,4])); 
    
}