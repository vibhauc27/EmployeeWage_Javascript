console.log("Welcome to Employee Wage Program using java script")

// Ability to Calculate Daily Employee Wage based on part time or full time work.
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_OF_WORKING_DAYS = 20;
{
    let totalEmpHrs = 0;
    for(let day=0; day<NO_OF_WORKING_DAYS; day++)
    {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs=getWorkHours(empCheck);
        totalEmpHrs += empHrs;
    }
// Check Employee is present or Absent or part time       
    function getWorkHours(empCheck)
    {
        switch (empCheck) 
        {
            case IS_ABSENT:
                return 0;
                break;
            case IS_PART_TIME:
                return PART_TIME_HOURS; 
                break;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS; 
                break;
            default:
                return 0;
                break;
        }
    }
let empWage = totalEmpHrs * WAGE_PER_HOUR; 
console.log("Emp Work Hrs: "+ totalEmpHrs +", Emp Wage: " + empWage); 
}