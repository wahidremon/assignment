// https://github.com/wahidremon/assignment

// kilometerToMeter
function kilometerToMeter(kilometerLength) {
    var meterLength = kilometerLength * 1000;
    return meterLength;
}

var result = kilometerToMeter(57);
console.log(result);

// budgetCalculator
var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 500;

function budgetCalculator(watchNmuber, phoneNumber, laptopNumber) {
    
    if(watchNmuber < 0) {
        watchNmuber = 0;
    }
    watchNmuber = watchNmuber * watchPrice;

    if(phoneNumber < 0) {
        phoneNumber = 0;
    }
    phoneNumber = phoneNumber * phonePrice;

    if(laptopNumber < 0) {
        laptopNumber = 0;
    }
    laptopNumber = laptopNumber * laptopPrice;
    
    var totalnumber = watchNmuber + phoneNumber + laptopNumber;
    return totalnumber; 
}

var result = budgetCalculator(0, 1, 2);
console.log(result);