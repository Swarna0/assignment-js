// 1. kilometerToMeter
function kilometerToMeter(n){
    var meter = n*1000;
    return meter;
}
var result = kilometerToMeter(8);
console.log(result);

// 2. budgetCalculator
function budgetCalculator(watch, mobile, laptop){
    var inTotal = watch * 50 + mobile * 100 + laptop * 500;
    return inTotal;
}
var budget = budgetCalculator(2, 3, 2);
console.log(budget);

// // 3.hotelCost
function hotelCost(n){
    if(n <= 10){
        totalCost = (n * 100);// cost = 100 for 1st 1o day's
        return totalCost;
    }
    else{
        var FirstTenDays=10;
        extraday=n-10;// extraday =  The days after 10 days
        totalCost=(FirstTenDays * 100) + (extraday * 80);//Add the price first ten days and the days after 10 days
        return totalCost;
    }
}
var result = hotelCost(21);
console.log(result);
 
// 4. megaFriend
function megaFriend(arr){
    var mega = arr[0];
     for ( i = 0; i < arr.length; i++) {
         element = arr[i];
            if( mega.length < element.length){
                mega = element
    }
  }
 return mega
}
var  friend = ["Abir", "Ajoy", "Robin", "Samanta"];
var result = megaFriend(friend);
console.log(result)