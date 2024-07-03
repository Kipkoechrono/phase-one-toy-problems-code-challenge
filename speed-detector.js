const readline = require('readline');

// Function to check the speed and determine the points or license suspension

function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsLimit = 12;
    const pointsPer5km = 5;
// If the speed is below the limit, return "Ok"

    if (speed < speedLimit) {
        return "Ok";
    } else {
        const points = Math.floor((speed - speedLimit) / pointsPer5km);
        // If points exceed the limit, return "License suspended"
        if (points > demeritPointsLimit) {
            return "License suspended";
        } else {
            return `Points: ${points}`;
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the speed of the car (km/h): ', (input) => {
    const speed = parseFloat(input);
    //check if input is a valid number 
    if (isNaN(speed)) {
        console.log("Invalid input. Please enter a numeric value.");
    } else {
          // Get the result from checkSpeed function and shows it
        console.log(checkSpeed(speed));
    }
    rl.close();
});
