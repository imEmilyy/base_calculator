let caratteri = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";

document.getElementById("info").addEventListener("click", function() {
    let information = document.getElementById("info2");
    console.log(information.style.display);
    if (information.style.display == "none" || information.style.display == ""){
        information.style.display = "block"; 
    }    
    else {
        information.style.display = "none";
    }
})
function convert(numero, base, again=false) {
    let x = " "
    let num = numero;
    if (base == 0 || Math.abs(base) == 1) {;
        return "ERROR! Base " + base + " is not acceptable.";
    }
    if (numero < 0 && base > 1) {
        return convert(-numero,base,true);
    }
    while ( num != 0) {
        let resto = num % base;
        num = parseInt(num / base);
        if (resto < 0) {
            num += 1;
            resto += Math.abs(base);
        }
        x = caratteri[resto] + x;

    }
    let valore = x.length -1;
    if( again==true) {
        x = "-" + x; 
    }
    return x + " | digits: " + valore;
}

    
function see() {
    let base = Math.floor(document.getElementById("base").value);
    let numero = (document.getElementById("numero").value);
    result = convert(numero, base);
    
    
    document.getElementById("check").innerHTML = result ;

}