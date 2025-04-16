function loadCertificateForm() {
  const passed = localStorage.getItem("quizPassed") === "true";

  const certForm = document.getElementById("certificateForm");
  const certContent = document.getElementById("certificateContent");

  if (!passed) {
    certForm.innerHTML =
      "<p>⚠️ You must pass the quiz to view your certificate.</p>";
    return;
  }

  const form = document.getElementById("nameForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("nameInput").value || "Anonymous Hero";
    const date = new Date().toLocaleDateString();

    certContent.innerHTML = `
      <h2>Certificate of Completion</h2>
      <p>This certifies that</p>
      <h1 id="certName">${name}</h1>
      <p>has successfully completed the</p>
      <h3>DYS Garage Training & Certification</h3>
      <p class="cert-date">Dated: ${date}</p>
      <button onclick="generatePDF()">📥 Download Certificate</button>
    `;

    certContent.classList.remove("hidden");
    certForm.classList.add("hidden");
  });
}

function generatePDF() {
  const element = document.getElementById("certificateContent");
  const opt = {
    margin: 0.5,
    filename: "DYS-SharPoint-Certificate.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, scrollY: 0 },
    jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
  };

  html2pdf().set(opt).from(element).save();
}

// 🌎 Make it globally accessible for showSection()
window.loadCertificateForm = loadCertificateForm;
