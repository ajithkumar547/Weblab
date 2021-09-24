var csum = 0,
    ccredit = 0,
    last, k = 0;

function myFunction1() {
    let sum = 0,
        creditsum = 0,
        gpa;
    for (let i = 1; i <= 6; i++) {
        let product, credit, grade;
        let a = "sem1" + i + "a";
        let b = "sem1" + i + "b";
        credit = document.getElementById(a).value;
        grade = document.getElementById(b).value;
        creditsum = creditsum + credit * 1;
        product = credit * grade;
        sum = sum + product;
        csum = csum + product;
        ccredit = ccredit + credit * 1;
    }
    gpa = sum / creditsum;
    document.getElementById("demo").innerHTML = gpa.toFixed(2);
    k = k + 1;
}

function reset() {

    last = document.getElementById("sem").value;
    if (k < last) {

        document.getElementById("enter").innerHTML = "Enter the 6 subject Course credits and Grade points of semester" + (k + 1) + " :";

        for (let i = 1; i <= 6; i++) {
            let product, credit;
            let a = "sem1" + i + "a";
            let b = "sem1" + i + "b";
            credit = document.getElementById(a);
            grade = document.getElementById(b);
            credit.value = "0";
            grade.value = "0";
        }
        if (k == last - 1) {
            document.getElementById("button").disabled = true;
            document.getElementById("button").innerHTML = "Enter the Last Semester";
        }
    }
    if (k == last) {
        alert("You have Entered all the Grade points and Course credit upto  " + (k) + " Semester. Now Calculate CGPA");

    }
}

function cgpa() {
    let cgpa1 = csum / ccredit;
    document.getElementById("demo1").innerHTML = cgpa1.toFixed(2);
}