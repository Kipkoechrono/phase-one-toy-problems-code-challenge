const readline = require('readline');

function getStudentGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Please enter a valid mark between 0 and 100.";
    } else {
        if (marks > 79) {
            return "The grade is: A";
        } else if (marks >= 60) {
            return "The grade is: B";
        } else if (marks >= 50) {
            return "The grade is: C";
        } else if (marks >= 40) {
            return "The grade is: D";
        } else {
            return "The grade is: E";
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter student marks (0 to 100): ', (input) => {
    const marks = parseFloat(input);
    if (isNaN(marks)) {
        console.log("Invalid input. Please enter a numeric value.");
    } else {
        console.log(getStudentGrade(marks));
    }
    rl.close();
 });