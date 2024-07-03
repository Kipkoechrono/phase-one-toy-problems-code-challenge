// Function to determine the grade

function getStudentGrade(marks) {
    // Check if the marks are in range
    if (marks < 0 || marks > 100) {
        return "Please enter a valid mark between 0 and 100.";
    } else {
        // Determine the grade based on the the marks 
        
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

// Prompt the user to enter the student marks
process.stdout.write('Enter student marks (0 to 100): ');

// Event listener for user input
process.stdin.on('data', function(data) {
    const input = data.toString().trim(); 
    const marks = parseFloat(input); 

    // Check if the input is a valid number
    if (isNaN(marks)) {
        console.log("Invalid input. Please enter a numeric value.");
        process.stdout.write('Enter student marks (0 to 100): '); 
        // Prompt again
    } else {
        // Get the grade based on the marks and display it
        console.log(getStudentGrade(marks));
        process.exit(); 
        // Exits the process after displaying the grade
    }
});

