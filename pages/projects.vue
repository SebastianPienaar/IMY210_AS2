<!-- Sebastian Pienaar u24778232 -->
<template>
  <Layout>
    <div>
      <h1>My Projects</h1>
      <div v-for="project in projects" :key="project.id">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '~/components/Layout.vue'
const projects = [
  { id: 1, title: 'Particle Swarm Optimisation', description: 'Implemented a simulation of the Particle Swarm Optimization (PSO) algorithm using C++98. This project involved creating multiple interlinked classes (Vector, Function, Particle, and PSO) to model the behaviour of particles searching for a function"s minimum in multi-dimensional space. Focus areas included dynamic memory management, class design, algorithm implementation, and comprehensive test coverage' },
  { id: 2, title: '3D Isometric Blender room', description: 'I am currently busy with this project. It involves creating a 3D isometric room using Blender. By the end of the project, I will have implemented lighting, rendering, and animation' },
  { id: 3, title: 'XML file manager', description: 'I am currently in the process of creating a web application that manages and transforms XML files. The system will allow users to upload XML documents and transform them based on a selected stylesheet.' }
]
</script>