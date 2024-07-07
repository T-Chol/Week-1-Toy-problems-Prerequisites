const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Constants for tax rates and thresholds (as per the provided links)
const taxRates = [
    { threshold: 24300, rate: 10 },
    { threshold: 13000, rate: 15 },
    { threshold: 11400, rate: 20 },
    { threshold: 13900, rate: 25 },
    { threshold: Infinity, rate: 30 }
];

const NHIF_RATES = [
    { min: 0, max: 5999, rate: 150 },
    { min: 6000, max: 7999, rate: 300 },
    { min: 8000, max: 11999, rate: 400 },
    { min: 12000, max: 14999, rate: 500 },
    { min: 15000, max: 19999, rate: 600 },
    { min: 20000, max: 24999, rate: 750 },
    { min: 25000, max: 29999, rate: 850 },
    { min: 30000, max: 34999, rate: 900 },
    { min: 35000, max: 39999, rate: 950 },
    { min: 40000, max: 44999, rate: 1000 },
    { min: 45000, max: 49999, rate: 1100 },
    { min: 50000, max: 59999, rate: 1200 },
    { min: 60000, max: 69999, rate: 1300 },
    { min: 70000, max: 79999, rate: 1400 },
    { min: 80000, max: 89999, rate: 1500 },
    { min: 90000, max: 99999, rate: 1600 },
    { min: 100000, max: 109999, rate: 1700 },
    { min: 110000, max: 119999, rate: 1800 },
    { min: 120000, max: 129999, rate: 1900 },
    { min: 130000, max: 139999, rate: 2000 },
    { min: 140000, max: 149999, rate: 2100 },
    { min: 150000, max: 159999, rate: 2200 },
    { min: 160000, max: 169999, rate: 2300 },
    { min: 170000, max: 179999, rate: 2400 },
    { min: 180000, max: 189999, rate: 2500 },
    { min: 190000, max: 199999, rate: 2600 },
    { min: 200000, max: 249999, rate: 2700 },
    { min: 250000, max: 299999, rate: 2800 },
    { min: 300000, max: 349999, rate: 2900 },
    { min: 350000, max: 399999, rate: 3000 },
    { min: 400000, max: 449999, rate: 3200 },
    { min: 450000, max: 499999, rate: 3400 },
    { min: 500000, max: 599999, rate: 3600 },
    { min: 600000, max: 699999, rate: 3800 },
    { min: 700000, max: 799999, rate: 4000 },
    { min: 800000, max: 899999, rate: 4200 },
    { min: 900000, max: 999999, rate: 4400 },
    { min: 1000000, max: Infinity, rate: 5000 }
];

const NSSF_RATE_EMPLOYEE = 6;
const NSSF_RATE_EMPLOYER = 6;

// Function to calculate PAYE tax
function calculatePAYE(grossSalary) {
    let tax = 0;
    let taxableIncome = grossSalary - 24300; // Deduct personal relief

    for (let i = 0; i < taxRates.length; i++) {
        if (taxableIncome <= 0) break;

        let currentRate = taxRates[i].rate / 100;
        let currentThreshold = taxRates[i].threshold;

        if (taxableIncome <= currentThreshold) {
            tax += taxableIncome * currentRate;
            break;
        } else {
            tax += currentThreshold * currentRate;
            taxableIncome -= currentThreshold;
        }
    }

    return tax;
}

// Function to calculate NHIF deductions
function calculateNHIF(grossSalary) {
    for (let i = 0; i < NHIF_RATES.length; i++) {
        if (grossSalary >= NHIF_RATES[i].min && grossSalary <= NHIF_RATES[i].max) {
            return NHIF_RATES[i].rate;
        }
    }
    return 0;
}

// Function to calculate NSSF deductions
function calculateNSSF(grossSalary) {
    let nssfEmployee = (grossSalary * NSSF_RATE_EMPLOYEE) / 100;
    let nssfEmployer = (grossSalary * NSSF_RATE_EMPLOYER) / 100;
    return { employee: nssfEmployee, employer: nssfEmployer };
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payee = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let deductions = payee + nhif + nssf.employee;
    let netSalary = grossSalary - deductions;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

// Prompt user for input
rl.question('Enter Basic Salary: ', (basicSalaryInput) => {
    rl.question('Enter Benefits: ', (benefitsInput) => {
        // Convert inputs to numbers
        let basicSalary = parseFloat(basicSalaryInput);
        let benefits = parseFloat(benefitsInput);

        if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log("Invalid input! Please enter valid numbers.");
        } else {
            // Calculate net salary
            let salaryDetails = calculateNetSalary(basicSalary, benefits);

            // Print results
            console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
            console.log(`PAYE (Tax): ${salaryDetails.payee}`);
            console.log(`NHIF Deductions: ${salaryDetails.nhif}`);
            console.log(`NSSF Deductions (Employee): ${salaryDetails.nssf.employee}`);
            console.log(`Net Salary: ${salaryDetails.netSalary}`);
        }

        rl.close();
    });
});
