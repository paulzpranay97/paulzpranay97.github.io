const resume_btn1 = document.getElementById("resume-button-1")
const resume_btn2 = document.getElementById("resume-button-2")
const resume_btn3 = document.getElementById("resume-button")

resume_btn1.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
   "https://drive.google.com/file/d/13PVcxf4Z0ZNhWnVJjr9S2QG4RevvMCIF/view?usp=share_link"
  );
  window.location.href =
    "https://drive.google.com/file/d/13PVcxf4Z0ZNhWnVJjr9S2QG4RevvMCIF/view?usp=share_link";
});

resume_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/13PVcxf4Z0ZNhWnVJjr9S2QG4RevvMCIF/view?usp=share_link"
  );
  window.location.href =
    "https://drive.google.com/file/d/13PVcxf4Z0ZNhWnVJjr9S2QG4RevvMCIF/view?usp=share_link";
});
resume_btn3.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/13PVcxf4Z0ZNhWnVJjr9S2QG4RevvMCIF/view?usp=share_link"
    );
    window.location.href =
      "https://drive.google.com/file/d/13PVcxf4Z0ZNhWnVJjr9S2QG4RevvMCIF/view?usp=share_link";
  });
  document.addEventListener('DOMContentLoaded', function() {
    const resume_btn2 = document.querySelector("#resume-button-1");
    resume_btn2.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "resume/Konark-Kumar-Resume.pdf";
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    const resume_btn2 = document.querySelector("#resume-button-2");
    resume_btn2.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "resume/pranay_paul_resume.pdf";
    });
  });