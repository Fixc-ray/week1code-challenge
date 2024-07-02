function gradeGenerator(marks) {
    let finalGrade;
    let errormark = "Invalid Grade"
    if (marks > 100 || marks < 0) {
      console.log(errormark); 
    }else if (marks <= 40) {
        console.log(finalGrade = "E");
    }else if (marks <= 49) {
        console.log(finalGrade = "D");
    }else if (marks <= 59) {
        console.log(finalGrade = "C");
    }else if (marks <= 79) {
        console.log(finalGrade = "B");
    }else if (marks <= 100) {
        console.log(finalGrade = "A");
    }
}
gradeGenerator()
