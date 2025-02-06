function filterOdd(numbers) {
    return numbers.filter(number => number % 2 !== 0); 
}
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2); 
}
function calculateSum(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0); 
}
function findMax(numbers) {
    return numbers.reduce((max, number) => (number > max ? number : max), numbers[0]); 
}
function processData(numbers, callback) {
    return callback(numbers);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Odd Numbers:", processData(numbers, filterOdd)); 
// [1, 3, 5, 7, 9]
console.log("Doubled Numbers:", processData(numbers, doubleNumbers)); 
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log("Sum of Numbers:", processData(numbers, calculateSum)); 
// 55
console.log("Maximum Number:", processData(numbers, findMax)); 
// 10
