const btn = document.getElementById("generateBtn");
const status = document.getElementById("status");

btn.addEventListener("click", async () => {
  const image = document.getElementById("image").files[0];
  const script = document.getElementById("script").value.trim();
  const voice = document.getElementById("voice").value;

  if (!image) {
    status.innerText = "❌ Please select an image.";
    return;
  }

  if (!script) {
    status.innerText = "❌ Please enter a script.";
    return;
  }

  status.innerText = "⏳ Generating video...";

  setTimeout(() => {
    status.innerHTML =
      "✅ Demo complete!<br><br>Real AI video generation requires connecting an AI Video API (Runway, Pika, Kling, Luma, etc.).";
  }, 3000);
});
