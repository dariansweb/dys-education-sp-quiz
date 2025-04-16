// scripts/training.js

const trainingContent = [
    {
      title: "Step 1: Open the Microsoft Login Page",
      body: `Use the site: <strong>login.microsoftonline.com</strong> to begin the process.`
    },
    {
      title: "Step 2: Choose Your Browser or Account",
      body: `You can either use a new browser profile or the one already logged in.`
    },
    {
      title: "Step 3: Select DHS Account",
      body: `Make sure to sign in with your DHS email address.`
    },
    {
      title: "Step 4: Authenticate via MFA",
      body: `You'll be prompted to authenticate. Choose from SMS, phone call, or authenticator app.`
    },
    {
      title: "Step 5: Open the Garage SharePoint",
      body: `Once authenticated, navigate via the App Launcher and paste the URL if needed.`
    }
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
      `;
      container.appendChild(section);
    });
  }
  
  document.addEventListener("DOMContentLoaded", loadTrainingModule);
  