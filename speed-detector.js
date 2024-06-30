const readline = require('readline');

function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsLimit = 12;
    const pointsPer5km = 5;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        const points = Math.floor((speed - speedLimit) / pointsPer5km);
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
    if (isNaN(speed)) {
        console.log("Invalid input. Please enter a numeric value.");
    } else {
        console.log(checkSpeed(speed));
    }
    rl.close();
});
