<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Student Wellness Monitor</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    body { font-family: 'Poppins', sans-serif; }
    .toast { position: fixed; right: 20px; bottom: 20px; background: rgba(0,0,0,0.75); color: white; padding: 12px 16px; border-radius: 8px; }
  </style>
</head>
<body class="bg-gradient-to-br from-pink-200 via-yellow-200 via-green-200 via-blue-200 to-purple-300 text-gray-800 min-h-screen">

  <!-- Navbar -->
  <header class="bg-white shadow sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <h1 class="text-2xl font-bold text-indigo-600">Wellness Monitor</h1>
      <div class="hidden md:flex items-center space-x-6">
        <a href="#checkin" class="hover:text-indigo-600">Mood Check-in</a>
        <a href="#analysis" class="hover:text-indigo-600">Analysis</a>
        <a href="#recommendations" class="hover:text-indigo-600">Recommendations</a>
        <a href="#trends" class="hover:text-indigo-600">Trends</a>
      </div>
      <div class="flex items-center space-x-2">
        <input id="searchInput" type="text" placeholder="Search..." class="px-3 py-2 rounded-lg border focus:ring focus:ring-indigo-300 outline-none" />
        <button id="searchBtn" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Go</button>
      </div>
    </div>
  </header>

  <!-- Hero Slideshow -->
  <section class="relative overflow-hidden">
    <div class="slideshow relative w-full h-[500px]">
      <div class="slide absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-100" style="background-image: url('https://i.pinimg.com/736x/45/bd/19/45bd1999a252b9a9b07b8b41a273c9c3.jpg');"></div>
      <div class="slide absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-0" style="background-image: url('https://i.pinimg.com/736x/ea/b7/34/eab7343f59641c7766fa9f675e7d7073.jpg');"></div>
      <div class="slide absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-0" style="background-image: url('https://i.pinimg.com/736x/32/7e/d8/327ed87dfc7a2ac06c1b34a9fb6f90ef.jpg');"></div>
    </div>
    <div class="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-6">
      <h2 class="text-4xl md:text-6xl font-bold mb-4">Student Wellness Monitor</h2>
      <p class="text-lg md:text-xl mb-6 max-w-2xl">Track moods, analyze emotions, and get personalized wellness recommendations — all in one place.</p>
      <a href="#checkin" class="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full font-semibold transition">Get Started</a>
    </div>
  </section>

  <!-- Mood Check-in -->
  <section id="checkin" class="py-12 px-6 max-w-6xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-4">Daily Mood Check-in</h2>
    <p class="mb-6 text-gray-700">Log how you’re feeling today and track your emotions over time. Add a short note (optional).</p>
    <div class="mb-6">
      <input id="noteInput" type="text" placeholder="Write a quick note (optional)" class="w-full md:w-1/2 px-4 py-3 rounded-lg border focus:ring focus:ring-indigo-300 outline-none" />
    </div>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
      <button data-mood="Happy" class="moodBtn bg-gradient-to-tr from-yellow-300 to-yellow-500 rounded-full w-36 h-36 shadow-lg hover:scale-110 transition transform flex flex-col items-center justify-center text-white font-semibold text-xl">
        <div class="text-3xl mb-1">😊</div>
        <span>Happy</span>
      </button>
      <button data-mood="Calm" class="moodBtn bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full w-36 h-36 shadow-lg hover:scale-110 transition transform flex flex-col items-center justify-center text-white font-semibold text-xl">
        <div class="text-3xl mb-1">😌</div>
        <span>Calm</span>
      </button>
      <button data-mood="Sad" class="moodBtn bg-gradient-to-tr from-pink-300 to-pink-500 rounded-full w-36 h-36 shadow-lg hover:scale-110 transition transform flex flex-col items-center justify-center text-white font-semibold text-xl">
        <div class="text-3xl mb-1">😢</div>
        <span>Sad</span>
      </button>
      <button data-mood="Stressed" class="moodBtn bg-gradient-to-tr from-red-300 to-red-500 rounded-full w-36 h-36 shadow-lg hover:scale-110 transition transform flex flex-col items-center justify-center text-white font-semibold text-xl">
        <div class="text-3xl mb-1">😫</div>
        <span>Stressed</span>
      </button>
      <button data-mood="Excited" class="moodBtn bg-gradient-to-tr from-green-300 to-green-500 rounded-full w-36 h-36 shadow-lg hover:scale-110 transition transform flex flex-col items-center justify-center text-white font-semibold text-xl">
        <div class="text-3xl mb-1">🤩</div>
        <span>Excited</span>
      </button>
    </div>
  </section>

  <!-- Sentiment Analysis -->
  <section id="analysis" class="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-12 px-6">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-4">Sentiment Analysis</h2>
        <p class="text-gray-700 mb-4">Our simple demo sentiment engine analyzes entries and returns a score between -1 (low) and +1 (high).</p>
        <div class="bg-white p-4 rounded-lg shadow">
          <p class="mb-2">Latest entry score: <strong id="latestScore">—</strong></p>
          <button id="getRecs" class="bg-indigo-600 text-white px-4 py-2 rounded-lg">Get Recommendations</button>
          <ul id="recsList" class="mt-3 text-left list-disc list-inside text-gray-700"></ul>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-medium mb-2">How it works</h3>
        <p class="text-gray-700">This demo backend stores check-ins and computes a simple score. In a full system we would use a proper NLP model and secure authentication.</p>
      </div>
    </div>
  </section>

  <!-- Recommendations Carousel (keeps working with backend) -->
  <section id="recommendations" class="py-12 px-6 max-w-6xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-4">Personalized Wellness Recommendations</h2>
    <div id="recCarousel" class="max-w-2xl mx-auto">
      <div id="recContent" class="bg-white p-6 rounded-2xl shadow">No recommendations yet. Log a mood to get started.</div>
    </div>
  </section>

  <!-- Trends Visualization -->
  <section id="trends" class="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 py-12 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Mood Trends Visualization</h2>
      <p class="mb-6 text-gray-700">A simple chart generated from stored check-ins.</p>
      <canvas id="moodChart" class="mx-auto" style="max-width:700px"></canvas>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 text-center">
    <p>&copy; 2025 Student Wellness Monitor | Built with ❤️ for AI-thon</p>
  </footer>

  <div id="toast" class="toast hidden"></div>

  <!-- JS for Slideshow + Backend integration -->
  <script>
    // Hero Slideshow
    const slides = document.querySelectorAll('.slideshow .slide');
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].style.opacity = 0;
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.opacity = 1;
    }, 4000);

    // Mood buttons -> POST to backend
    const backendBase = location.origin.includes('http://localhost') ? location.origin : 'http://localhost:4000';
    const moodBtns = document.querySelectorAll('.moodBtn');
    const noteInput = document.getElementById('noteInput');
    const toast = document.getElementById('toast');
    const latestScoreEl = document.getElementById('latestScore');
    const recContent = document.getElementById('recContent');

    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 2500);
    }

    moodBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        const mood = btn.getAttribute('data-mood');
        const note = noteInput.value.trim();
        try {
          const res = await fetch(backendBase + '/api/checkin', {
            method: 'POST', headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ mood, note })
          });
          const data = await res.json();
          if (data.ok) {
            showToast('Check-in saved — thank you!');
            latestScoreEl.textContent = data.entry.score;
            loadRecommendations();
            loadTrends();
          } else {
            showToast('Could not save check-in');
          }
        } catch (e) {
          console.error(e);
          showToast('Backend unreachable. Make sure the server is running.');
        }
      });
    });

    // Get recommendations
    async function loadRecommendations() {
      try {
        const res = await fetch(backendBase + '/api/recommendations');
        const data = await res.json();
        if (data.ok) {
          recContent.innerHTML = `<h4 class=\"font-semibold mb-2\">Recommendations</h4><ul class=\"text-left list-disc list-inside\">${data.recs.map(r => `<li>${r}</li>`).join('')}</ul>`;
        }
      } catch (e) { console.error(e); }
    }
    document.getElementById('getRecs').addEventListener('click', loadRecommendations);

    // Trends -> Chart.js
    let moodChart;
    async function loadTrends() {
      try {
        const res = await fetch(backendBase + '/api/trends');
        const data = await res.json();
        if (!data.ok) return;
        const labels = Object.keys(data.byMood);
        const counts = Object.values(data.byMood);
        const ctx = document.getElementById('moodChart').getContext('2d');
        if (moodChart) moodChart.destroy();
        moodChart = new Chart(ctx, {
          type: 'doughnut',
          data: { labels, datasets: [{ label: 'Mood counts', data: counts }] },
          options: { responsive: true }
        });
      } catch (e) { console.error(e); }
    }

    // initial load
    loadRecommendations();
    loadTrends();

    // Search (local filter demo)
    document.getElementById('searchBtn').addEventListener('click', () => {
      const q = document.getElementById('searchInput').value.trim().toLowerCase();
      if (!q) { showToast('Type something to search'); return; }
      // simple demo: announce search
      showToast(`Search for: ${q}`);
    });

  </script>
</body>
</html>
