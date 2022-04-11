console.log("Welcome to Employee Wage Program using java script")

//UC1 - Check Employee is present or Absent using Math.Random
{
    const IS_ABSENT=0;
    let empcheck = Math.floor(Math.random()*10)%2;
    if(empcheck==IS_ABSENT)
    {
        console.log("Employee is Absent");
    }
    else
    {
        console.log("Employee is Present");
    }
}


// UC2 - Ability to Calculate Daily Employee Wage based on part time or full time work.
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) 
    {
        case IS_ABSENT:
            empHrs = 0;
            break;            
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS; 
            break;
        default:
            empHrs = 0;
            break;
    }
    let empWage = empHrs * WAGE_PER_HOUR; 
    console.log("Emp Wage: " + empWage);
}