// Example 1:

// Input: ops = ["5", "2", "C", "D", "+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now[5].
// "2" - Add 2 to the record, record is now[5, 2].
// "C" - Invalidate and remove the previous score, record is now[5].
// "D" - Add 2 * 5 = 10 to the record, record is now[5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now[5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

function baseBallGame(operations){
    let operay = [];

    for(i=0; i< operations.length; i++){
        if (!isNaN(Number(operations[i]))){ 
            operay.push(Number(operations[i]))
        }
        if(operations[i] === "D"){
            let double = operay[operay.length - 1] * 2;
            operay.push(double);
        }
        if(operations[i] === "C"){
            operay.pop();
        }
        if(operations[i] === "+"){
            let plus = operay[operay.length - 1] + operay[operay.length - 2]
            operay.push(plus)
        }       
    }
    return operay.reduce((acc, value) => acc + value,0);

}

baseBallGame(["5", "2", "C", "D", "+"]) // 30