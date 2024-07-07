const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    // Calculate the speed above the limit
    let speedAboveLimit = speed - speedLimit;

    // If speed is less than or equal to the speed limit, print "OK"
    if (speed <= speedLimit) {
        console.log("OK");
        return;
    }

    // Calculate demerit points
    let demeritPoints = Math.floor(speedAboveLimit / kmPerDemeritPoint);

    // Check if demerit points exceed 12
    if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
}

rl.question('Enter the speed of the car: ', (answer) => {
    // Convert input to a number
    let speed = parseFloat(answer);

    // Validate if speed is a number
    if (isNaN(speed)) {
        console.log("Invalid input! Please enter a valid number.");
    } else {
        calculateDemeritPoints(speed);
    }

    rl.close();
});
