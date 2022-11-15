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

// hotelCost
function hotelCost(hotelDays) {    
    if (hotelDays <= 10 ) {
        var hotelPrice = hotelDays * 100;
    }
    else if (hotelDays <= 20) {
        var firstTen = 10 * 100;
        var remaining = hotelDays - 10;
        var secondTen = remaining * 80;
        hotelPrice = firstTen + secondTen;
    }
    else {
        firstTen = 10 * 100;
        secondTen = 10 * 80;
        remaining = hotelDays - 20;
        var lastRemain = remaining * 50;
        hotelPrice = firstTen + secondTen + lastRemain;
    }
    return hotelPrice;
}

var totalBill = hotelCost(21);
console.log(totalBill);