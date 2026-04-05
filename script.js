// Fade-in animation on load
window.addEventListener("load", () => {
    document.querySelector(".hero-content").style.opacity = "1";
});
function showSem(sem){

let data = {

sem1: {
    title: "Semester 1",
    sgpa: "7.65",
    subjects: [
        ["Professional English I","A+"],
        ["Matrices and Calculus","A"],
        ["Basic Electrical and Electronics Engineering","B"],
        ["Engineering Graphics","A"],
        ["C Programming","B+"],
        ["Fabrication and Reverse Engineering Laboratory","A"],
        ["C Programming Lab","A"]
    ]
},

sem2: {
    title: "Semester 2",
    sgpa: "7.69",
    subjects: [
        ["Professional English II","B+"],
        ["Integrals & Laplace Transform","A"],
        ["Engineering Chemistry","B+"],
        ["Physics for Computer Technology","B+"],
        ["Python Programming","B+"],
        ["Web Development","A+"],
        ["Python Programming Lab","A+"],
        ["Engineering Physics & Chemistry Lab","A"]
    ]
},

sem3: {
    title: "Semester 3",
    sgpa: "7.76",
    subjects: [
        ["Mathematical Statistics","A"],
        ["Data Structures","O"],
        ["Java Programming","A+"],
        ["Digital Logic & Microprocessor","A+"],
        ["Computer Networks","A"],
        ["DS Lab","A+"],
        ["Java Lab","A+"]
    ]
},

sem4: {
    title: "Semester 4",
    sgpa: "7.85",
    subjects: [
        ["Discrete Mathematics","B+"],
        ["Design & Analysis of Algorithms","B+"],
        ["Advanced Web Development","A"],
        ["Database Management Systems","A"],
        ["Software Engineering","A"],
        ["Usability Design","A"],
        ["DBMS Lab","O"],
        ["AWD Lab","A+"]
    ]
},

sem5: {
    title: "Semester 5",
    sgpa: "7.8",
    subjects: [
        ["Artificial Intelligence","B+"],
        ["Computer Architecture","B+"],
        ["Operating Systems","B+"],
        ["Formal Language & Automata","B+"],
        ["Design Thinking","A"],
        ["Power BI","A"],
        ["Data Mining","A"],
        ["AI Lab","A+"],
        ["OS Lab","A+"]
    ]
}

};

let selected = data["sem"+sem];

let html = `
<div class="sem-card">
    <h2>${selected.title} 
    <span class="sgpa">(SGPA: ${selected.sgpa})</span>
    </h2>

    <table class="sem-table">
        <tr>
            <th>Subject</th>
            <th>Grade</th>
        </tr>
`;

selected.subjects.forEach(sub=>{
    html += `<tr>
                <td>${sub[0]}</td>
                <td class="grade">${sub[1]}</td>
             </tr>`;
});

html += `
    </table>
</div>
`;
document.getElementById("semester-details").style.display = "block";
document.getElementById("semester-details").innerHTML = html;
}
function showPage(pageId){

    // Hide all pages
    document.querySelectorAll('.page').forEach(section=>{
        section.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Scroll to top
    window.scrollTo(0,0);
}

/* ===== Animate Circular Progress ===== */

document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll(".circle").forEach(circle=>{
        let percent = circle.getAttribute("data-percent");
        circle.style.background =
        `conic-gradient(#38bdf8 ${percent*3.6}deg, rgba(255,255,255,0.1) 0deg)`;
    });

});

/* ===== Skill Filter ===== */

function filterSkills(category){

    let buttons = document.querySelectorAll(".skills-tabs button");
    buttons.forEach(btn=>btn.classList.remove("active"));
    event.target.classList.add("active");

    let cards = document.querySelectorAll(".skill-card");

    cards.forEach(card=>{
        if(category === "all"){
            card.style.display="block";
        }else{
            card.style.display =
                card.classList.contains(category) ? "block" : "none";
        }
    });
}