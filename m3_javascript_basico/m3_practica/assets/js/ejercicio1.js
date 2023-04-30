/* Totally Not Another FizzBuzz
Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers!
Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is:

- Divisible by 3 - Vacation!
- Divisible by 5 - $100,000 bonus!
- Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
- Not divisible by 3 or 5 - :(

Write a program to loop through all the ID numbers and print their prize.
Your function's output should look something like this:

1 - :(
2 - :(
3 - Vacation!
4 - :(
5 - $100,000 bonus!
*/

const idNumbers = [1,2,3,4,5];

function awardBonuses(){
    let response;
    for (let i of idNumbers){
        if(i % 15 == 0){
            response = "JACKPOT! 1 Million and a Yacht!";
        } else if(i % 5 == 0){
            response = "$100,000 bonus!";
        } else if(i % 3 == 0){
            response = "Vacation!";
        } else{
            response = ":(";
        }
        console.log(i + '-' + response);
    }
}

function awardBonusesv2(numEmployees){
    let response;
    for (let i = 1; i <= numEmployees; i++){
        if(i % 15 == 0){
            response = "JACKPOT! 1 Million and a Yacht!";
        } else if(i % 5 == 0){
            response = "$100,000 bonus!";
        } else if(i % 3 == 0){
            response = "Vacation!";
        } else{
            response = ":(";
        }
        console.log(i + '-' + response);
    } 
}

awardBonuses();
awardBonusesv2(50);
