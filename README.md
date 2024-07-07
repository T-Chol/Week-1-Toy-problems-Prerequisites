# Week-1-Toy-problems-Prerequisites


# Student challenge1.js Grading Program
This JavaScript program prompts the user to input student marks and grade them based on the following criteria:

- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - Less than 40

## Usage

1. **Input**: The program expects the user to input a student's marks within the range of 0 to 100.
2. **Output**: Based on the input marks, the program will display the corresponding grades.

## Example

If the user inputs a mark of `85`, the program will output `A`.
If the user inputs a mark of `65`, the program will output `B`.
If the user inputs a mark of `50`, the program will output `C`.
If the user inputs a mark of `45`, the program will output `D`.
If the user inputs a mark of `30`, the program will output `E`.

## How to Run

To run the program, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Download or clone the `Week-1-Toy-problems-Prerequisites` repository.
3. Open your terminal or command prompt.
4. Navigate to the directory where `challenge1.js` is located.
5. Run the command `node challenge1.js`.
6. Follow the prompts to input the student's marks and view the corresponding grades.

## Implementation

The grading logic is implemented using conditional statements to check the range of the input marks and determine the appropriate challenge1.js.

```javascript
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


//**********************************************************************************************************************************************************************************


# Speeding Ticket Demerit Points Calculator

This repository contains a JavaScript program that calculates demerit points for speeding drivers based on their speed input.

## Problem Statement

The program takes the speed of a car as input. If the speed is less than 70 km/h, it prints "Ok". If the speed is 70 km/h or more, the program calculates demerit points:
- For every 5 km/h above the speed limit (70 km/h), the driver gets one demerit point.
- If the total demerit points exceed 12, the program prints "License suspended".

## Implementation

The JavaScript code (`challenge2.js`) uses basic conditional statements and arithmetic operations to achieve the following:
- Accept user input for the car's speed.
- Calculate demerit points based on the speed.
- Print messages based on the calculated demerit points.

## Files

- `challenge2.js`: Contains the JavaScript code implementing the speeding ticket demerit points calculator.

## How to Use

To use the program:
1. Clone or download this repository to your local machine.
2. Open `challenge2.js` in a JavaScript-compatible environment (e.g., Node.js, browser console).
3. Execute the script and follow the prompts to input the car's speed.
4. The program will output either "Ok", the total demerit points, or "License suspended" based on the input speed.

### Example
// Example usage:
// Assume the car speed entered is 85 km/h
// Output should be "Points: 3"

// Running the script in Node.js:
// $ node challenge2.js
// Enter the car's speed: 85
// Points: 3

//**********************************************************************************************************************************************************************************


# Salary Calculator Programs

This repository contains JavaScript programs that calculate an individual's Net Salary based on different inputs and deductions.

## Programs Included

### 1. Net Salary Calculator

#### Purpose
Calculate an individual’s net salary after deducting taxes, NHIF, and NSSF contributions based on their basic salary and benefits.

#### Features
- Calculates Payee (Tax) based on KRA tax brackets and rates.
- Deducts NHIF contributions based on NHIF rates.
- Deducts NSSF contributions based on NSSF rates.
- Computes gross salary before deductions.
- Outputs the final net salary after all deductions.

#### Implementation
The JavaScript code (`challenge3.js`) uses:
- Input prompts or function parameters to get the basic salary and benefits.
- Conditional statements to determine tax brackets and rates.
- Arithmetic operations to calculate deductions and net salary.

#### How to Use
1. Clone or download this repository to your local machine.
2. Open `challenge3.js` in a JavaScript-compatible environment (e.g., Node.js, browser console).
3. Execute the script and follow the prompts or use function calls to input the basic salary and benefits.
4. The program will output the gross salary, deductions (Payee, NHIF, NSSF), and the final net salary.

### 2. Income Tax Calculator

#### Purpose
Calculate the income tax (Payee) based on the KRA tax brackets and rates.

#### Features
- Determines the applicable tax bracket based on the income.
- Calculates the income tax based on the bracket's rate and thresholds.

#### Implementation
The JavaScript code (`challenge3.js`) implements:
- Functions or prompts to input the taxable income.
- Switch or conditional statements to determine the tax bracket.
- Mathematical formulas to compute the tax amount.

#### How to Use
1. Open `challenge3.js` in a JavaScript-compatible environment.
2. Call the function or provide input directly in the script.
3. The program will output the calculated income tax amount.

### 3. Deductions Calculator (NHIF & NSSF)

#### Purpose
Calculate NHIF and NSSF deductions based on the individual's gross salary.

#### Features
- Uses fixed rates provided by NHIF and NSSF.
- Calculates deductions directly from the gross salary.

#### Implementation
The JavaScript code (`challenge3.js`) includes:
- Constants or variables representing NHIF and NSSF rates.
- Functions or direct calculations to determine deductions.

#### How to Use
1. Open `challenge3.js` in a JavaScript-compatible environment.
2. Provide the gross salary value either through function parameters or input prompts.
3. The program will output the calculated NHIF and NSSF deductions.

## External References

For detailed information on the current KRA, NHIF, and NSSF rates used in these calculations, refer to:
- [KRA Tax Rates](https://www.aren.co.ke/payroll/taxrates.htm)
- [NHIF Rates](https://www.aren.co.ke/payroll/nhifrates.htm)
- [NSSF Rates](https://www.aren.co.ke/payroll/nssfrates.htm)

These links provide the latest rates for accurate salary calculations.

