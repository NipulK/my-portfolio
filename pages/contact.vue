
<template>
  <section class="modern-hero-section">
    <client-only>
      <component :is="ParticlesBackground" class="absolute inset-0 z-0" />
    </client-only>
    <div class="modern-hero-content">
      <div class="modern-hero-box">
        <h1 class="modern-hero-title">Contact</h1>
        <p class="modern-hero-desc mb-6">Feel free to reach out for collaborations, questions, or just to say hi!</p>
        <div class="text-left text-gray-200 mb-4">
          <p class="mb-2">Email: <a href="mailto:nipulkanishka2003@gmail.com" class="text-blue-400 underline">nipulkanishka2003@gmail.com</a></p>
          <p class="mb-2">LinkedIn: <a href="https://linkedin.com/in/nipulkanishka" class="text-blue-400 underline">linkedin.com/in/nipulkanishka</a></p>
          <p>Contact number: <span class="text-pink-400">+91 700 200 3000</span></p>
        </div>
        <div class="modern-hero-socials">
          <a href="https://github.com/nipulkanishka" target="_blank" class="modern-hero-social github" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/nipulkanishka" target="_blank" class="modern-hero-social linkedin" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="mailto:nipulkanishka2003@gmail.com" class="modern-hero-social resume" aria-label="Email"><i class="fas fa-envelope"></i></a>
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
