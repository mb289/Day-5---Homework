/**
 * 1. create a new repo on Github,
 * 2. add this script file to your index.html and run it in the browser to get the output
 * 3. debug and see the console.log() messages in the chrome dev tools
 */


/**
 * PART 1
 *
 * Write a JavaScript program that takes two numbers as parameters and computes the sum of those two numbers
 *
 * For example, if the user input 3 and 6, then the answer would be: "9 (3+6)".
 */

var sum = function(a, b) {
	"use strict";
    return a+b
}

console.log(sum(8, 11));

/**
 * PART 2
 *
 * Write a JavaScript program that calculates the average time for this marathoner to complete the full marathon (26.2mi)
 */

var matt = {
    finishingTime1: 240, //in minutes
    finishingTime2: 210.4,
    finishingTime3: 235.1,
    finishingTime4: 208.9,
    finishingTime5: 197.5
};

var mark = {
    finishingTime1: 120, //in minutes
    finishingTime2: 110.4,
    finishingTime3: 135.1,
    finishingTime4: 108.9,
    finishingTime5: 97.5
};

var getAverageTime = function(person) {
	"use strict";
var averageTime = (person.finishingTime1+person.finishingTime2+person.finishingTime3+person.finishingTime4+person.finishingTime5) / 5
    
    return averageTime
}

console.log(getAverageTime(matt));
console.log(getAverageTime(mark));


/**
 * PART 3
 *
 *
 * Modify the following to calculate the difference between the two accounts.
 */

/**
 * declarations
 */

var MattsBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

var RobertosBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

function addToBank(account, savings, retirement, checking) {
	"use strict";
    account.savings = account.savings + savings;
    account.retirement = account.retirement + retirement;
    account.checking = account.checking + checking;
}

function getSumOfAccounts(account) {
	"use strict";

var accountSums = (account.checking+account.savings+account.retirement)
    
    return accountSums
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos);