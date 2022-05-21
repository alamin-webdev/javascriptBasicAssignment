// https://github.com/alaminWeb/javascriptBasicAssignment
// Kilometer To Meter 
function kilometerToMeter(kilo) {
    if (kilo <= 0 && kilo != null) {
        var warning = "Please, enter a valid number.";
        return warning;
    }

    let meter = kilo * 1000;
    return meter;

}
let result = kilometerToMeter(0);
// console.log(result);


//Budget Calculator
function budgetCalculator(watch, phone, laptop) {
   if(watch <= 0 && phone <= 0 && laptop <= 0){
       let msg = "wrong";
       return msg;
   }
   
        let watchPrice = watch * 50;
        let phonePrice = phone * 100;
        let laptopPrice = laptop * 500;
        let total = watchPrice + phonePrice + laptopPrice;
        return total;
    
    

}
let result1 = budgetCalculator(1, 0, 0);
console.log(result1);


// Holet Cost 
function hotelCost(days) {
    let totalCost = 0;
    if (days <= 10) {
        totalCost = days * 100;
    }
    else if (days <= 20) {
        let firstCost = 10 * 100;
        let remaining = days - 10;
        let secondCost = remaining * 80;
        totalCost = firstCost + secondCost;
    }
    else {
        let firstCost = 10 * 100;
        let secondCost = 10 * 80;
        let remaining = days - 20;
        let thirdCost = remaining * 50;
        totalCost = firstCost + secondCost + thirdCost;

    }
    return totalCost;
}
let result2 = hotelCost(22);
// console.log(result2);


// Mega Friend 
function megaFriend(names) {
    let largName = names[0];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (element.length > largName.length) {
            largName = element;
        }

    }
    return largName;
}
let friendsName = ["Abul Kashem", "jamal uddin bashir", "kalam"];
let result3 = megaFriend(friendsName);
// console.log(result3);

