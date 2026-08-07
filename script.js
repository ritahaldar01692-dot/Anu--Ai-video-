const btn = document.getElementById("generateBtn");
const status = document.getElementById("status");

btn.addEventListener("click", async () => {
  const image = document.getElementById("image").files[0];
  const script = document.getElementById("script").value.trim();

  if (!image) {
    status.innerText = "❌ প্রথমে একটি ছবি নির্বাচন করুন।";
    return;
  }

  if (!script) {
    status.innerText = "❌ প্রথমে একটি স্ক্রিপ্ট লিখুন।";
    return;
  }

  status.innerText = "🤖 Gemini AI স্ক্রিপ্ট উন্নত করছে...";

  setTimeout(() => {
    status.innerText =
      "✅ Gemini AI প্রস্তুত। পরের ধাপে API যুক্ত করলে এটি সত্যিই AI দিয়ে স্ক্রিপ্ট উন্নত করবে।";
  }, 2000);
});
