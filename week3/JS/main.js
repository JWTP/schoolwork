/**
 * Created by J.W. Taylor Parkins on 20-2-2017.
 */
var dish = "spagetti";
var dishScore = 2;
var res = dish.charAt(0).toUpperCase()+dish.slice(1);

console.log(dish, dishScore, res);

var dishScores = [1,5,3,2,1,2];
var dishScoreNames = ["","blegh","mwah","oke", "Lekker","nog een keer opscheppen"];

for(var value of dishScores){
    console.log(value, dishScoreNames[value]);
}

var sum = 0;
for( var i = 0; i < dishScores.length; i++ ){
    sum += dishScores[i];
}

var avg = sum/dishScores.length;

var max = Math.max(...dishScores);

console.log(dishScores,sum,avg,max);

function increaseArrayByOne(x, y) {
    var newArray = [];
    newArray.push(x[y]+1);
    return newArray;
}
console.log(increaseArrayByOne(dishScores,4));


function calculateAvg(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++){
        sum += x[i];
    }
    var avg = sum/x.length;
    return avg;
}

console.log(calculateAvg(dishScores));