<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from './NavBar.vue'
</script>

<style>
header {
  background: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}
</style>