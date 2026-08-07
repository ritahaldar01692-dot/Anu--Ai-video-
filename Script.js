const btn = document.getElementById("generateBtn");
const status = document.getElementById("status");

btn.addEventListener("click", () => {
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

  status.innerText = "⏳ Video generation is not connected yet.";
  alert(
    "UI is working.\n\nThe next step is to connect a real AI video generation API."
  );

  console.log({
    image,
    script,
    voice
  });
});
