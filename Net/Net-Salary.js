const basicSalary = 22000;
const benefits = 750;
const gross = basicSalary + benefits;

console.log("Your Gross Salary is", gross);

function Paye() {
  if (gross <= 24000) {
    console.log("Your Paye is", gross * 0.1);
  } else if (gross <= 32333) {
    console.log("Your Paye is", gross * 0.25);
  } else if (gross <= 500000) {
    console.log("Your Paye is", gross * 0.3);
  } else if (gross <= 800000) {
    console.log("Your Paye is", gross * 0.325);
  } else if (gross > 800000) {
    console.log("Your Paye is", gross * 0.35);
  }
}
Paye();

function NHIF() {
  if (gross <= 5999) {
    console.log("Your NHIF DEDUCTION IS 150", gross - 150);
    console.log();
  } else if (gross <= 7999) {
    console.log("Your NHIF DEDUCTION IS 150", gross - 300);
  } else if (gross <= 11999) {
    console.log("Your NHIF DEDUCTION IS 400", gross - 400);
  } else if (gross <= 14999) {
    console.log("Your NHIF DEDUCTION IS 500", gross - 500);
  } else if (gross <= 19999) {
    console.log("Your NHIF DEDUCTION IS 600", gross - 600);
  } else if (gross <= 24999) {
    console.log("Your NHIF DEDUCTION IS 750", gross - 750);
  } else if (gross <= 29999) {
    console.log("Your NHIF DEDUCTION IS 850", gross - 850);
  } else if (gross <= 34999) {
    console.log("Your NHIF DEDUCTION IS 900", gross - 900);
  } else if (gross <= 39999) {
    console.log("Your NHIF DEDUCTION IS 950", gross - 950);
  } else if (gross <= 44999) {
    console.log("Your NHIF DEDUCTION IS 1000", gross - 1000);
  } else if (gross <= 49999) {
    console.log("Your NHIF DEDUCTION IS 1100", gross - 1100);
  } else if (gross <= 59999) {
    console.log("Your NHIF DEDUCTION IS 1200", gross - 1200);
  } else if (gross <= 69999) {
    console.log("Your NHIF DEDUCTION IS 1300", gross - 1300);
  } else if (gross <= 79999) {
    console.log("Your NHIF DEDUCTION IS 1400", gross - 1400);
  } else if (gross <= 89999) {
    console.log("Your NHIF DEDUCTION IS 1500", gross - 1500);
  } else if (gross <= 99999) {
    console.log("Your NHIF DEDUCTION IS 1600", gross - 1600);
  } else if (gross >= 10000) {
    console.log("Your NHIF DEDUCTION IS 1700", gross - 1700);
  }
}
NHIF();

function housingLevy() {
  console.log("Your Housing Levy Deductions are", gross * 0.015);
}
housingLevy();

function NSSF() {
  console.log("Your NSSF pay is", gross * 0.06);
}
NSSF();
