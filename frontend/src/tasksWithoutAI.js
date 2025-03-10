// src/tasksWithoutAI.js
const tasksWithoutAI = [
    {
        id: 1,
        title: "Task #1 (No AI) - Add Two Numbers",
        description: `Implement a function addTwoNumbers(a, b) that returns the sum of a and b.`,
        testCases: [
            "Input: 2, 3 → Output: 5",
            "Input: 0, 0 → Output: 0",
            "Input: -1, 5 → Output: 4",
        ],
    },
    {
        id: 2,
        title: "Task #2 (No AI) - Repeat a String N Times",
        description: `Implement a function repeatString(str, n) that returns str repeated n times. If n <= 0, return an empty string.`,
        testCases: [
            "Input: ('Hi', 2) → Output: 'HiHi'",
            "Input: ('Hello', 3) → Output: 'HelloHelloHello'",
            "Input: ('test', 0) → Output: ''",
        ],
    },
    {
        id: 3,
        title: "Task #3 (No AI) - Reverse a String",
        description: `Implement a function reverseString(str) that returns the reversed version of str.`,
        testCases: [
            "Input: 'Hello' → Output: 'olleH'",
            "Input: '' → Output: ''",
            "Input: 'abc' → Output: 'cba'",
        ],
    },
    {
        id: 4,
        title: "Task #4 (No AI) - Find Minimum in an Array",
        description: `Implement a function findMin(nums) that returns the smallest integer in the array nums. Decide how to handle an empty array.`,
        testCases: [
            "Input: [3, 1, 5, 2] → Output: 1",
            "Input: [10, 10, 10] → Output: 10",
            "Input: [] → handle (e.g., return null or Infinity)",
        ],
    },
    {
        id: 5,
        title: "Task #5 (No AI) - FizzBuzz",
        description: `Implement a function fizzBuzz(n) that prints or returns the numbers 1..n, but for multiples of 3 output 'Fizz', for multiples of 5 output 'Buzz', and for multiples of both 3 and 5 output 'FizzBuzz'.`,
        testCases: [
            "Input: 15 → Output sequence: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz",
        ],
    },
];

export default tasksWithoutAI;
