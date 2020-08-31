function sum(num1, num2, num3) {
    return num1 + num2 * 5;
}
console.log(sum(2,5));
console.log(sum(10,8));
console.log(sum(12, 3));

function numberstring(argument1){
    if(argument1.length > 10){
        return true;
    }else if(argument1.length <= 10){
        return false;
    }else{
        console.log("There is an error");
    }
}

console.log(numberstring("Abominable"));
console.log(numberstring("flower"));
console.log(numberstring("Supercalifragaliciousexpealidocious"));


function letterfind(letterinder){
    
    for(var i=0; i<=letterfinder.length; i++) {
        if(letterfinder[i].startswith('ph')) {
            return letterfinder([i]);
        }
    }
    console.log("Does not start with ph");
}

console.log(letterfind("Phaeton", "parrot"));
console.log(letterfind("flour", "phantom"));
console.log(letterfind("phalanx", "electricity"));