//funtion readline which allows reading of input stream line by line

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Geting input of basic salary and benefits

function getBasicSalaryAndBenefits() {
  rl.question('Enter Basic Salary: ', (firstValue) => {
    rl.question('Enter Total Benefits: ', (secondValue) => {
      // Once both values are entered, you can use them as needed
      
      //output gross salary and net salary
      grossSalary=calculateGrossSalary(firstValue,secondValue);
      console.log(`Gross Salary: ${grossSalary}`)
      netSalary= calculateNetSalary();
      console.log(`Net Salary: ${netSalary}`)
      console.log(`Payee: ${deductPayeeKRA()*grossSalary}`)
      console.log(`NHIF: ${deductNHIF()}`)
      console.log(`NSSF: ${deductNSSF()}`)

      // Closing the readline interface
      rl.close();
    });
  });
}

// Call the function to start getting two values from the user
getBasicSalaryAndBenefits();

//Calculates how much KRA will deduct
function deductPayeeKRA(){
    let taxRate;

    switch (true) {
        case (grossSalary <= 24000):
            taxRate = 0.1;
            break;
        case (grossSalary >= 24001 && grossSalary <= 32333):
            taxRate = 0.25;
            break;
        case (grossSalary >= 32334 && grossSalary <= 500000):
            taxRate = 0.3;
            break;
        case (grossSalary >= 500001 && grossSalary <= 800000):
            taxRate = 0.325;
            break;
        default:
            taxRate = 0.35;
    }

    return taxRate;

}

//Calculates how much NHIF will deduct.
function deductNHIF(){
    let deduct;

    switch (true) {
        case (grossSalary <= 5999):
            deduct = 150;
            break;
        case (grossSalary >= 6000 && grossSalary <= 7999):
            deduct = 300;
            break;
        case (grossSalary >= 8000 && grossSalary <= 11999):
            deduct = 400;
            break;
        case (grossSalary >= 12000 && grossSalary <= 14999):
            deduct = 500;
            break;
        case (grossSalary >= 15000 && grossSalary <= 19999):
            deduct = 600;
            break;
        case (grossSalary >= 20000 && grossSalary <= 24999):
            deduct = 750;
            break;
        case (grossSalary >= 25000 && grossSalary <= 29999):
            deduct = 850;
            break;
        case (grossSalary >= 30000 && grossSalary <= 34999):
            deduct = 900;
            break;
        case (grossSalary >= 35000 && grossSalary <= 39999):
            deduct = 950;
            break;
        case (grossSalary >= 40000 && grossSalary <= 44999):
            deduct = 1000;
            break;
        case (grossSalary >= 45000 && grossSalary <= 49999):
            deduct = 1100;
            break;
        case (grossSalary >= 50000 && grossSalary <= 59999):
            deduct = 1200;
            break;
        case (grossSalary >= 60000 && grossSalary <= 69999):
            deduct = 1300;
            break;
        case (grossSalary >= 70000 && grossSalary <= 79999):
            deduct = 1400;
            break;
        case (grossSalary >= 80000 && grossSalary <= 89999):
            deduct = 1500;
            break;
        case (grossSalary >= 90000 && grossSalary <= 99999):
            deduct = 1600;
            break;
        default:
            deduct = 1700;
    }

    return deduct; 
}
//Calculate how much NSSF will deduct
function deductNSSF(){
    let deduct;
    deduct=0.06*grossSalary;
    return deduct;
}

//Calculate gross salary
function calculateGrossSalary(basicSalary, benefits){

    grossSalary=Number(basicSalary)+Number(benefits);

    return grossSalary;

}

//Calculate net salary
function calculateNetSalary(){

    totalDeductions=Number(deductPayeeKRA()*grossSalary)+Number(deductNHIF())+Number(deductNSSF());
    netSalary=grossSalary-totalDeductions;

    return netSalary;
}