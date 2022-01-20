


// function for calculating the grades

// Getting inputs from the user
$("#btncalc").click(function () {

    var overallgrade = (($("#assignment").val() * 55) + ($("#group").val() * .05) + ($("#quiz").val() * .10) + ($("#exam").val() * .20) + ($("#intex").val() * .10))

// Make sure the user inputs value between 0 and 100 */

   
            
    if (($('#assignment' > 100 || $('#assignment' < 0)) || ($('#group' > 100 || $('#group' < 0)) || ($('#quiz' > 100 || $('#quiz' < 0)) || ($('#exam' > 100 || $('#exam' < 0)) || ($('#intex' > 100 || $('#intex' < 0))))))))
    {
        alert("Enter value from 0 to 100.")

    }
    else {
        break;
    }
  

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
        grades = "FAIL";
    }

   


    // Checking the values are empty if empty than
    // show please fill them
    if (assignment == "" || quiz == ""
        || group == "" || exam == "" || intex == "") {
        alert("Please enter a value for every category.");
    }
    else {
        alert(`Your grade is a(n) ${grades}`)
        $("#demo").innerHTML = `Your total number is ${overallgrade}`;
        $("#demo2").innerHTML = `Your percentage is ${percentage}`;
        $("#demo3").innerHTML = `Your ended the class with a(n) ${grades}`;

    }



});
   

 











