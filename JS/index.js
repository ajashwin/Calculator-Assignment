const btnEle = document.getElementById("btn");
btnEle.innerText = "Calculate Grade" 

btnEle.addEventListener("click", function(event) {
    let subject1 = parseInt(document.getElementById("subject1").value);
    let subject2 = parseInt(document.getElementById("subject2").value);
    let subject3 = parseInt(document.getElementById("subject3").value);
    let subject4 = parseInt(document.getElementById("subject4").value);
    let subject5 = parseInt(document.getElementById("subject5").value);

    if (isNaN(subject1)) {
        subject1 = 0;
    }
    if (isNaN(subject2)) {
        subject2 = 0;
    }
    if (isNaN(subject3)) {
        subject3 = 0;
    }
    if (isNaN(subject4)) {
        subject4 = 0;
    }
    if (isNaN(subject5)) {
        subject5 = 0;
    }

    if (subject1 <= 35 || subject2 <= 35 || subject3 <= 35 || subject4 <= 35 || subject5 <= 35) {
        document.getElementById("grade").innerHTML = "F";
        document.getElementById("total").innerHTML = "";
        document.getElementById("average").innerHTML = "";
    } else {
        let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
        let possibleMarks = 100;
        let percentage = (totalMarks / possibleMarks) * 100;

        document.getElementById("total").innerHTML = totalMarks;
        document.getElementById("average").innerHTML = (totalMarks/5).toFixed(2);
        if (percentage >= 90) {
            document.getElementById("grade").innerHTML = "A";
        } else if (percentage >= 80 && percentage <= 89) {
            document.getElementById("grade").innerHTML = "B";
        } else if (percentage >= 70 && percentage <= 79) {
            document.getElementById("grade").innerHTML = "C";
        } else if (percentage >= 60 && percentage <= 69) {
            document.getElementById("grade").innerHTML = "D";
        } else
            document.getElementById("grade").innerHTML = "F";
    }
})
