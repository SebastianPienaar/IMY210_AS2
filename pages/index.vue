<template>
  <Layout>
    <div class="portfolio-container">
      <!-- Hero Section -->
      <section class="hero">
        <img src="/profile.jpg" alt="Profile" class="profile-img">
        <h1>Welcome to My Portfolio</h1>
        <p class="subtitle">University of Pretoria student | Web Developer</p>
      </section>

      <!-- Main Content Grid -->
      <div class="content-grid">
        <!-- About Me Section -->
        <section class="about-section card">
          <div class="section-header">
            <h2>About Me</h2>
            <div class="accent-line"></div>
          </div>
          <div class="section-content">
            <p>I am currently a 2nd year BIS Multimedia student at the University of Pretoria. I am interested in game development 
              and web development. I have experience in C++, Java, JavaScript and XML. I am also interested in AI and machine learning.
              In my free time, I like to play chess, video games and watch movies.
            </p>
          </div>
        </section>

        <!-- Weather Widget -->
        <section class="weather-section card">
          <div class="section-header">
            <h2>Current Weather</h2>
            <div class="accent-line"></div>
          </div>
          <div v-if="weather" class="weather-content">
            <div class="weather-icon">
              <img src="/season.png" alt="Weather Icon">
            </div>
            <div class="weather-details">
              <p class="temperature">{{ weather.current_weather.temperature }}°C</p>
              <p class="conditions">{{ weatherCodeToText(weather.current_weather.weathercode) }}</p>
              <p class="location">Pretoria, South Africa</p>
            </div>
          </div>
          <div v-else class="loading">
            Loading weather data...
          </div>
        </section>

        <!-- Chess Stats Section -->
        <section class="chess-section card">
          <div class="section-header">
            <h2>Chess Performance</h2>
            <div class="accent-line"></div>
          </div>
          <ChessStats />
        </section>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import ChessStats from '~/components/ChessStats.vue'
import { ref } from 'vue'
import { useAsyncData } from 'nuxt/app'

const weather = ref(null)

// Fetch weather data using $fetch
const { data } = await useAsyncData('weather', async () => {
  return await $fetch('https://api.open-meteo.com/v1/forecast?latitude=-25.73&longitude=28.22&current_weather=true')
})
weather.value = data.value

// Convert weather code to text
const weatherCodeToText = (code) => {
  const codes = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    // Add more codes as needed
  }
  return codes[code] || 'Unknown weather'
}
</script>

<style scoped>
.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
}

.section-header {
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.5rem;
  color: #2b2d42;
  margin-bottom: 0.5rem;
}

.accent-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #4361ee, #3a0ca3);
  border-radius: 3px;
}

.weather-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.weather-icon img {
  width: 64px;
  height: 64px;
}

.temperature {
  font-size: 2rem;
  font-weight: 700;
  color: #2b2d42;
  margin-bottom: 0.25rem;
}

.conditions {
  color: #6c757d;
  margin-bottom: 0.25rem;
}

.location {
  font-size: 0.9rem;
  color: #adb5bd;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  margin-bottom: 1.5rem;
}

.hero {
  text-align: center;
  padding: 3rem 0;
}
</style>