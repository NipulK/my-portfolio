
<template>
  <section class="modern-hero-section">
    <client-only>
      <component :is="ParticlesBackground" class="absolute inset-0 z-0" />
    </client-only>
    <div class="modern-hero-content">
      <div class="modern-hero-box">
        <h1 class="modern-hero-title">Resume</h1>
        <p class="modern-hero-desc mb-6">Download my latest resume or view my experience and education below.</p>
        <a href="/resume.pdf" download class="modern-hero-btn btn-blue mb-4">Download My Resume</a>
        <div class="text-left text-gray-200 mt-6">
          <h3 class="text-xl font-bold text-blue-400 mb-2">Experience</h3>
          <ul class="mb-4">
            <li>• Front-end Developer Intern, Example Company (2024)</li>
            <li>• Data Science Trainee, DataCamp (2023)</li>
          </ul>
          <h3 class="text-xl font-bold text-blue-400 mb-2">Education</h3>
          <ul>
            <li>• B.Tech in Software Engineering, Your University (2022-2026)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <WaveDivider />
</template>




<script setup>
import { defineAsyncComponent } from 'vue'
import WaveDivider from '~/components/WaveDivider.vue'
const ParticlesBackground = defineAsyncComponent(() => import('~/components/ParticlesBackground.vue'))
</script>
