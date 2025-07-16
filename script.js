function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim().toLowerCase();
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = '';

  if (!id) {
    showToast('⚠️ Please enter a valid Email or ID');
    return;
  }

  const allowedEmail = "aryangoyal2352007@gmail.com"; 

  if (id === allowedEmail) {
    const student = {
      name: "Aryan Goyal",
      email: allowedEmail,
      mobile: "7827460115",
      domain: "Web Development",
      college: "Ambedkar DSEU Campus 1",
      start: "01 July 2025",
      duration: "1 Month",
      photo: "PHOTO.jpg", 
      assignments: [true, true, true, true],
      certificate: "OFFERLETTER.pdf" 
    };

    const html = `
      <div class="card">
        <img src="${student.photo}" alt="Photo" />
        <h3>${student.name}</h3>
        <p><strong>Email:</strong> ${student.email}</p>
        <p><strong>Mobile:</strong> ${student.mobile}</p>
        <p><strong>Domain:</strong> ${student.domain}</p>
        <p><strong>College:</strong> ${student.college}</p>
        <p><strong>Start Date:</strong> ${student.start}</p>
        <p><strong>Duration:</strong> ${student.duration}</p>
        <h4>Assignment Status</h4>
        <div class="assignment-status">
          ${student.assignments.map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}</span>`).join('')}
        </div>
        <p><strong>Status:</strong> Completed</p>
        <a href="${student.certificate}" target="_blank">📄 View Certificate</a>
      </div>
    `;

    resultBox.innerHTML = html;
    showToast('✅ Student verified successfully!');
  } else {
    resultBox.innerHTML = `
      <div class="card" style="text-align:center;">
        <p style="color:crimson; font-weight:600;">❌ No records found for the provided ID.</p>
      </div>
    `;
    showToast('❌ No record found.');
  }
}
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// On page load – applied stored theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});