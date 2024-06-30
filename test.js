const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get input of basic salary and benefits
function getBasicSalaryAndBenefits() {
  rl.question("Enter Basic Salary: ", (firstValue) => {
    rl.question("Enter Total Benefits: ", (secondValue) => {
      // Once both values are entered, you can use them as needed

      //To Calculate gross salary
      const grossSalary = calculateGrossSalary(firstValue, secondValue);
      console.log(`Gross Salary: ${grossSalary}`);

      // To Calculate net salary
      const netSalary = calculateNetSalary(grossSalary);
      console.log(`Net Salary: ${netSalary}`);

      // This Calculates the deductions
      const payee = deductPayeeKRA(grossSalary);
      console.log(`Payee: ${payee}`);

      const nhif = deductNHIF(grossSalary);
      console.log(`NHIF: ${nhif}`);

      const nssf = deductNSSF(grossSalary);
      console.log(`NSSF: ${nssf}`);

      // Close the readline interface
      rl.close();
    });
  });
}

// Call the function to start getting two values from the user
getBasicSalaryAndBenefits();

// To Calculate how much KRA will deduct after;
function deductPayeeKRA(grossSalary) {
  let taxRate;

  if (grossSalary <= 24000) {
    taxRate = 0.1;
  } else if (grossSalary <= 32333) {
    taxRate = 0.25;
  } else if (grossSalary <= 500000) {
    taxRate = 0.3;
  } else if (grossSalary <= 800000) {
    taxRate = 0.325;
  } else {
    taxRate = 0.35;
  }

  return taxRate * grossSalary;
}

// Calculate how much NHIF will deduct;
function deductNHIF(grossSalary) {
  let deduct;

  if (grossSalary <= 5999) {
    deduct = 150;
  } else if (grossSalary <= 7999) {
    deduct = 300;
  } else if (grossSalary <= 11999) {
    deduct = 400;
  } else if (grossSalary <= 14999) {
    deduct = 500;
  } else if (grossSalary <= 19999) {
    deduct = 600;
  } else if (grossSalary <= 24999) {
    deduct = 750;
  } else if (grossSalary <= 29999) {
    deduct = 850;
  } else if (grossSalary <= 34999) {
    deduct = 900;
  } else if (grossSalary <= 39999) {
    deduct = 950;
  } else if (grossSalary <= 44999) {
    deduct = 1000;
  } else if (grossSalary <= 49999) {
    deduct = 1100;
  } else if (grossSalary <= 59999) {
    deduct = 1200;
  } else if (grossSalary <= 69999) {
    deduct = 1300;
  } else if (grossSalary <= 79999) {
    deduct = 1400;
  } else if (grossSalary <= 89999) {
    deduct = 1500;
  } else if (grossSalary <= 99999) {
    deduct = 1600;
  } else {
    deduct = 1700;
  }

  return deduct;
}

// Calculate how much NSSF will deduct
function deductNSSF(grossSalary) {
  const deduct = 0.06 * grossSalary;
  return deduct;
}

// Calculate gross salary
function calculateGrossSalary(basicSalary, benefits) {
  const grossSalary = Number(basicSalary) + Number(benefits);
  return grossSalary;
}

// Calculate net salary
function calculateNetSalary(grossSalary) {
  const totalDeductions =
    Number(deductPayeeKRA(grossSalary)) +
    Number(deductNHIF(grossSalary)) +
    Number(deductNSSF(grossSalary));
  const netSalary = grossSalary - totalDeductions;
  return netSalary;
}
