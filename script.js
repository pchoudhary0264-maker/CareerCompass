function predictCareer() {

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (!q1 || !q2) {
        alert("Please answer at least Questions 1 and 2.");
        return;
    }

    let career = "";

    if (q1.value === "tech" && q2.value === "tech") {
        career = "💻 Software Engineer";
    }
    else if (q1.value === "doctor" && q2.value === "doctor") {
        career = "👨‍⚕️ Doctor";
    }
    else if (q1.value === "design" && q2.value === "design") {
        career = "🎨 Graphic Designer";
    }
    else if (q1.value === "engineer" || q2.value === "tech") {
        career = "🏗️ Civil Engineer";
    }
    else {
        career = "🚀 Entrepreneur";
    }

    document.getElementById("result").style.display = "block";
    document.getElementById("careerResult").innerHTML =
        "<strong>Recommended Career:</strong> " + career;

}
