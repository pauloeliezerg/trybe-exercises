// net salary calculator
let grossSalary = 3000,
  socialSecurityAliquot = grossSalary * 0.08,
  incomeTaxAliquot = 0,
  netSalary;

if (grossSalary >= 1556.95) socialSecurityAliquot = grossSalary * 0.09;
if (grossSalary >= 2594.93)
  socialSecurityAliquot = Math.min(grossSalary * 0.11, 570.88);

let deductedSalary = grossSalary - socialSecurityAliquot;

if (deductedSalary >= 1903.99)
  incomeTaxAliquot = deductedSalary * 0.075 - 142.8;
if (deductedSalary >= 2826.66) incomeTaxAliquot = deductedSalary * 0.15 - 354.8;
if (deductedSalary >= 3751.06)
  incomeTaxAliquot = deductedSalary * 0.225 - 636.13;
if (deductedSalary > 4664.68)
  incomeTaxAliquot = deductedSalary * 0.275 - 869.36;

netSalary = grossSalary - socialSecurityAliquot - incomeTaxAliquot;

console.log(netSalary);
