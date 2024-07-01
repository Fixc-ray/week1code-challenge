function gradeGenerator(marks) {
    let finalGrade;
    let errormark;

if (marks <= 40) {
    finalGrade = "E"
} else if (marks <= 49) {
    finalGrade = "D"
} else if (marks <= 59) {
    finalGrade = "C"
} else if (marks <= 79) {
    finalGrade = "B"
} else if (marks <= 100) {
    finalGrade = "A"
} else if (marks > 100 || marks < 0) {
    errormark = "Please input a valid mark"
}
if (marks > 100 || marks) {
    console.log(errormark);
}else{
    console.log(finalGrade);
}
}
gradeGenerator(-3)
