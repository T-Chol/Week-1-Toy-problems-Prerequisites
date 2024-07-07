function calculateGrade() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter student marks (between 0 and 100): ', input => {
        // Convert input to a number
        let marks = parseFloat(input);

        // Validate if marks is a number and within the range 0 to 100
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input! Marks must be a number between 0 and 100.");
        } else {
            // Determine grade based on the marks
            let grade;
            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60) {
                grade = 'B';
            } else if (marks >= 50) {
                grade = 'C';
            } else if (marks >= 40) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            // Output the grade
            console.log(`Marks: ${marks} -> Grade: ${grade}`);
        }

        readline.close();
    });
}

// Call the function to prompt the user
calculateGrade();
