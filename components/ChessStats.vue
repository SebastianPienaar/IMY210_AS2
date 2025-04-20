<script setup>
const { data: stats, pending, error } = await useFetch('/api/chess/stats')
const config = useRuntimeConfig()
const profileUrl = computed(() => `https://www.chess.com/member/${config.public.chessUsername}`)
</script>

<template>
  <div class="chess-stats">
    <h2>Chess.com Stats</h2>
    <div v-if="pending">Loading chess stats</div>
    <div v-else-if="error || stats?.error">
      Failed to load chess stats: {{ error?.message || stats?.error }}
      <p v-if="stats?.status === 404">Please check your Chess.com username is correct</p>
    </div>
    <div v-else-if="stats">
      <div class="stats-grid">
        <div class="stat-item">
          <h3>Username</h3>
          <p>
            <a :href="profileUrl" target="_blank" rel="noopener noreferrer">
              {{ config.public.chessUsername }}
            </a>
          </p>
        </div>
    
        
        <div class="stat-item" v-if="stats.chess_rapid?.last">
          <h3>Rapid Rating</h3>
          <p>{{ stats.chess_rapid.last.rating || 'N/A' }}</p>
        </div>
        
        <div class="stat-item" v-if="stats.chess_blitz?.last">
          <h3>Blitz Rating</h3>
          <p>{{ stats.chess_blitz.last.rating || 'N/A' }}</p>
        </div>
        
        <div class="stat-item" v-if="stats.chess_bullet?.last">
          <h3>Bullet Rating</h3>
          <p>{{ stats.chess_bullet.last.rating || 'N/A' }}</p>
        </div>
        
      
        
        <div class="stat-item" v-if="stats.tactics">
          <h3>Puzzle Stats</h3>
          <p v-if="stats.tactics.highest">Highest: {{ stats.tactics.highest.rating || 'N/A' }}</p>
          <p v-if="stats.tactics.lowest">Lowest: {{ stats.tactics.lowest.rating || 'N/A' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.chess-stats {
  background: #f8f9fa;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.stat-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stat-item h3 {
  margin-top: 0;
  color: #4b5563;
  font-size: 0.9rem;
}

.stat-item p {
  margin-bottom: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.stat-item a {
  color: #2563eb;
  text-decoration: none;
  transition: color 0.2s ease;
}

.stat-item a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}
</style>