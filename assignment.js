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
function hotelCost(totalDay){
    var totalCost = 0;
    if(totalDay <= 10){  
        totalCost = totalDay*100; 
    }
    else if(totalDay<=20){  
       var firstTenDays =10*100;
       var remainingDay = totalDay-10;   
       var secondTenDays=remainingDay*80;  
       totalCost=firstTenDays + secondTenDays; 

    }
    else{
        var firstTenDays = 10*100;  
        var secondTenDays = 10*80;  
        var remainingDay = totalDay-20; 
        var extraDays = remainingDay*50; 
        totalCost = firstTenDays + secondTenDays + extraDays; 
 
     }
    return totalCost;
}
var result=hotelCost(21);
console.log(result)
 
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