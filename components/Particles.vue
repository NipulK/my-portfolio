<template>
  <Particles
    id="tsparticles"
    :options="options"
    class="fixed inset-0 -z-10 w-full h-full pointer-events-none"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadLinksPreset } from 'tsparticles-preset-links'
import { tsParticles } from 'tsparticles-engine'
import Particles from 'vue3-particles'

const options = ref({
  preset: 'links',
  background: {
    color: '#000000',
    opacity: 0
  },
  particles: {
    color: { value: '#38bdf8' },
    links: {
      color: '#818cf8',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 1
    },
    number: {
      value: 50
    }
  }
})

onMounted(async () => {
  await loadLinksPreset(tsParticles)
})
</script>