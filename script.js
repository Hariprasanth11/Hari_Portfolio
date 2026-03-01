
function showPage(pageId, element){

let pages=document.querySelectorAll('.card');
pages.forEach(p=>p.classList.remove('active'));

let navItems=document.querySelectorAll('.nav-item');
navItems.forEach(n=>n.classList.remove('active'));

document.getElementById(pageId).classList.add('active');
element.classList.add('active');
}

/* SEMESTER DATA FULL TABLE */
function showSem(sem){

let data={

// SEM 1
sem1: `
<div style="background:white;padding:25px;border-radius:14px;box-shadow:0 8px 25px rgba(0,0,0,0.15);">

<h2 style="margin-bottom:20px;">
Semester 1 <span style="color:#c5a059;">(SGPA: 7.65)</span>
</h2>

<table class="sem-table">
<tr>
<th>Subject</th>
<th>Grade</th>
</tr>

<tr><td>Professional English I</td><td>A+</td></tr>
<tr><td>Matrices and Calculus</td><td>A</td></tr>
<tr><td>Basic Electrical and Electronics Engineering</td><td>B</td></tr>
<tr><td>Engineering Graphics</td><td>A</td></tr>
<tr><td>C Programming</td><td>B+</td></tr>
<tr><td>Fabrication and Reverse Engineering Laboratory</td><td>A</td></tr>
<tr><td>C Programming Lab</td><td>A</td></tr>
</table>
</div>
`,

// SEM 2
sem2: `
<div style="background:white;padding:25px;border-radius:14px;box-shadow:0 8px 25px rgba(0,0,0,0.15);">

<h2 style="margin-bottom:20px;">
Semester 2 <span style="color:#c5a059;">(SGPA: 7.69)</span>
</h2>

<table class="sem-table">
<tr>
<th>Subject</th>
<th>Grade</th>
</tr>

<tr><td>Professional English II</td><td>B+</td></tr>
<tr><td>Integrals, Partial Differential Equations and Laplace Transform</td><td>A</td></tr>
<tr><td>Engineering Chemistry</td><td>B+</td></tr>
<tr><td>Physics for Computer Technology</td><td>B+</td></tr>
<tr><td>Python Programming</td><td>B+</td></tr>
<tr><td>Web Development</td><td>A+</td></tr>
<tr><td>Python Programming Laboratory</td><td>A+</td></tr>
<tr><td>Engineering Physics and Chemistry Laboratory</td><td>A</td></tr>
</table>
</div>
`,

// SEM 3
sem3: `
<div style="background:white;padding:25px;border-radius:14px;box-shadow:0 8px 25px rgba(0,0,0,0.15);">

<h2 style="margin-bottom:20px;">
Semester 3 <span style="color:#c5a059;">(SGPA: 7.76)</span>
</h2>

<table class="sem-table">
<tr>
<th>Subject</th>
<th>Grade</th>
</tr>

<tr><td>Mathematical Statistics and Numerical Methods</td><td>A</td></tr>
<tr><td>Data Structures</td><td>O</td></tr>
<tr><td>Java Programming</td><td>A+</td></tr>
<tr><td>Digital Logic and Microprocessor</td><td>A+</td></tr>
<tr><td>Computer Networks</td><td>A</td></tr>
<tr><td>DS Lab</td><td>A+</td></tr>
<tr><td>Java Lab</td><td>A+</td></tr>
</table>
</div>
`,

// SEM 4
sem4: `
<div style="background:white;padding:25px;border-radius:14px;box-shadow:0 8px 25px rgba(0,0,0,0.15);">

<h2 style="margin-bottom:20px;">
Semester 4 <span style="color:#c5a059;">(SGPA: 7.85)</span>
</h2>

<table class="sem-table">
<tr>
<th>Subject</th>
<th>Grade</th>
</tr>

<tr><td>Discrete Mathematics</td><td>B+</td></tr>
<tr><td>Design and Analysis of Algorithms</td><td>B+</td></tr>
<tr><td>Advanced Web Development</td><td>A</td></tr>
<tr><td>Database Management Systems</td><td>A</td></tr>
<tr><td>Software Engineering</td><td>A</td></tr>
<tr><td>Usability Design of Software Applications</td><td>A</td></tr>
<tr><td>DBMS Lab</td><td>O</td></tr>
<tr><td>AWD Lab</td><td>A+</td></tr>
</table>
</div>
`,

// SEM 5
sem5: `
<div style="background:white;padding:25px;border-radius:14px;box-shadow:0 8px 25px rgba(0,0,0,0.15);">

<h2 style="margin-bottom:20px;">
Semester 5 <span style="color:#c5a059;">(SGPA: 7.8)</span>
</h2>

<table class="sem-table">
<tr>
<th>Subject</th>
<th>Grade</th>
</tr>

<tr><td>Artificial Intelligence</td><td>B+</td></tr>
<tr><td>Computer Architecture</td><td>B+</td></tr>
<tr><td>Operating Systems</td><td>B+</td></tr>
<tr><td>Formal Language and Automata Theory</td><td>B+</td></tr>
<tr><td>Design Thinking</td><td>A</td></tr>
<tr><td>Power BI</td><td>A</td></tr>
<tr><td>Data Mining</td><td>A</td></tr>
<tr><td>AI Lab</td><td>A+</td></tr>
<tr><td>OS Lab</td><td>A+</td></tr>
</table>
</div>
`
};

document.getElementById("semDisplay").innerHTML=data[sem];
}

function openCertificate(img){
window.open(img, "_blank");
}