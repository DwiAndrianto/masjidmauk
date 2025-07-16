// Set waktu sholat berikutnya (contoh: Dzuhur jam 12:00)
const nextPrayerTime = new Date();
nextPrayerTime.setHours(12, 0, 0, 0); // jam 12:00:00 siang

function updateCountdown() {
  const now = new Date();
  let distance = nextPrayerTime - now;

  // Jika sudah lewat, set ke hari berikutnya
  if (distance < 0) {
    nextPrayerTime.setDate(nextPrayerTime.getDate() + 1);
    distance = nextPrayerTime - now;
  }

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update tampilan
  document.getElementById("countdown-hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("countdown-minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("countdown-seconds").textContent = String(seconds).padStart(2, '0');
}

// Jalankan setiap detik
setInterval(updateCountdown, 1000);
updateCountdown(); // panggil sekali di awal
