// scripts/training.js

const trainingContent = [
  {
    title: "Step 1: Open the Microsoft Login Page",
    body: `Go to <strong>login.microsoftonline.com</strong> from a supported browser.`,
    image: "assets/training/login.png",
  },
  {
    title: "Step 2: Choose Your Browser or Account",
    body: `Use a fresh browser profile or ensure you're logged in with your DHS account.`,
    image: "assets/training/login2.png",
  },
  {
    title: "Step 3: Select the DHS Account",
    body: `Make sure to choose the correct DHS account if prompted.`,
    image: "assets/training/login3.png",
  },
  {
    title: "Step 4: Authenticate via MFA",
    body: `Complete the MFA process using SMS, phone call, or Authenticator App.`,
    image: "assets/training/mfa1.png",
  },
  {
    title: "Step 5: Access SharePoint",
    body: `Open the App Launcher (waffle menu) and select SharePoint.`,
    image: "assets/training/menu1.png",
  },
  {
    title: "Bonus: Direct URL Access",
    body: `You may also paste the SharePoint link directly into your browser.`,
    image: "assets/training/url.png",
  },
  {
    title: "Bonus: Checking DHS Email (Optional)",
    body: `Sometimes verification codes or notices are sent to your DHS Outlook inbox.`,
    image: "assets/training/email1.png",
  },
];

function loadTrainingModule() {
  const container = document.getElementById("training");
  container.innerHTML = "<h2>📚 Training Module</h2>";

  trainingContent.forEach((step, index) => {
    const section = document.createElement("div");
    section.className = "training-step";
    section.innerHTML = `
        <h3>${step.title}</h3>
        <p>${step.body}</p>
  ${
    step.image
      ? `<img src="${step.image}" alt="${step.title}" class="training-img" />`
      : ""
  }

      `;
    container.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", loadTrainingModule);
