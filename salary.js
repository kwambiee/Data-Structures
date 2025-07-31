// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary.Answers within 10 - 5 of the actual answer will be accepted.



//     Example 1:

// Input: salary = [4000, 3000, 1000, 2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is(2000 + 3000) / 2 = 2500
// Example 2:

// Input: salary = [1000, 2000, 3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is(2000) / 1 = 2000

var average = function (salary) {
    const sortedSalary = salary.sort((a, b) => a - b);
    console.log("sprttt ", sortedSalary)
    sortedSalary.shift();
    sortedSalary.pop();
    const total = sortedSalary.reduce((acc, value) => acc + value, 0);
    const result = total / sortedSalary.length;
  
    return result;


    

};

average([25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000, 40000])