let basicSalary = 22000;
let benefits = 2500;
let paye = "Your PAYE is"

const sum = basicSalary + benefits
console.log(sum);
//Monthly Taxable Pay
function PayAsYouEarn() {
    if (sum <=24000) {
        console.log(sum * 0.1); 
    }else if (sum <= 32333) {
        console.log(sum * 0.25); 
    }else if (sum <= 500000) {
        console.log(sum * 0.30);
    }else if (sum <= 800000) {
        console.log(sum * 0.325);
    }else if (sum > 800000) {
        console.log(sum * 0.35);
    }
}
PayAsYouEarn()

//NHIF deductuctions
function NHIF() {
    if (sum <= 5999) {
        console.log(sum - 150);
    }else if (sum <= 7999) {
        console.log(sum - 300);
    }else if (sum <= 11999) {
        console.log(sum - 400);
    }else if (sum <= 14999) {
        console.log(sum - 500);
    }else if (sum <= 19999) {
        console.log(sum - 600);
    }else if (sum <= 24999) {
        console.log(sum - 750);
    }else if (sum <= 29999) {
        console.log(sum - 850);
    }else if (sum <= 34999) {
        console.log(sum - 900);
    }else if (sum <= 39999) {
        console.log(sum - 950);
    }else if (sum <= 44999) {
        console.log(sum - 1000);
    }else if (sum <= 49999) {
        console.log(sum - 1100);
    }else if (sum <= 59999) {
        console.log(sum - 1200);
    }else if (sum <= 69999) {
        console.log(sum - 1300);
    }else if (sum <= 79999) {
        console.log(sum - 1400);
    }else if (sum <= 89999) {
        console.log(sum - 1500);
    }else if (sum <= 99999) {
        console.log(sum - 1600);
    }else if (sum >= 100000) {
        console.log(sum - 1700);
    }
}
NHIF()

//Housing Levy
function housingLevy(a, b) {
    return a * b;
}
console.log(housingLevy(sum, 0.15));

//Net Salary
function NetSalary(a, b, c) {
    return a - b - c
}
console.log(NetSalary(sum, PayAsYouEarn, housingLevy));