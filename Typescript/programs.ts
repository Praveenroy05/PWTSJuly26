/*

// Assignment:
// Write a program to display the grade of a student
// >90 <=100- A
// >80 && <90 - B
// >70 && <80 - C
// >50 && <70 - D
// <50 - Fail

*/

const marks = 80

if (marks < 0 || marks > 100) {
    console.log("Invalid marks! Please enter marks between 0 and 100.");
} else if (marks > 90) {
    console.log("Grade: A");
} else if (marks > 80) {
    console.log("Grade: B");
} else if (marks > 70) {
    console.log("Grade: C");
} else if (marks > 50) {
    console.log("Grade: D");
} else {
    console.log("Result: Fail");
}