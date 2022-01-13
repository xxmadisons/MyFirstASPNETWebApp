const { btncalc } = require("jquery");


// function for calculating the grades
const btncalc = () => {

    // Getting inputs from the user
    let assignment = $("#assignment").value;
    let group = $("#group").value;
    let quiz = $("#quiz").value;
    let exam = $("#exam").value;
    let intex = $("#intex").value;
    let grades = "";

    // Input is string so typecasting is necessary. */
    let overallgrade =
        parseFloat(assignment) * .55 +
        parseFloat(quiz) * .10 +
        parseFloat(exam) * .20 +
        parseFloat(intex) * .10 +
        parseFloat(group) * .05;




    // Checking the condition for the providing the 
    // grade to student based on percentage
    let percentage = (overallgrade / 1.00);
    if (percentage <= 100 && percentage >= 94) {
        grades = "A";
    } else if (percentage <= 93 && percentage >= 90) {
        grades = "A-";
    } else if (percentage <= 89 && percentage >= 87) {
        grades = "B+";
    } else if (percentage <= 86 && percentage >= 84) {
        grades = "B";
    } else if (percentage <= 83 && percentage >= 80) {
        grades = "B-";
    } else if (percentage <= 79 && percentage >= 77) {
        grades = "C+";
    } else if (percentage <= 76 && percentage >= 74) {
        grades = "C";
    } else if (percentage <= 73 && percentage >= 70) {
        grades = "C-";
    } else if (percentage <= 69 && percentage >= 67) {
        grades = "D+";
    } else if (percentage <= 66 && percentage >= 64) {
        grades = "D";
    } else if (percentage <= 63 && percentage >= 60) {
        grades = "D-";
    } else {
        grades = "E";
    }

    // Checking the values are empty if empty than
    // show please fill them
    if (assignment == "" || quiz == ""
        || group == "" || exam == "" || intex == "") {
        $("#showdata").innerHTML
            = "Please enter all the fields";
    } else {

            $(
                "#showdata"
            ).innerHTML =
                ` Your grade is ${percentage} 
        and your letter grade is a(n) ${grades}%. `;
       
        
    }
   
};














