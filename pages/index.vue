<template>
  <section class="bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#0f172a] min-h-screen flex flex-col justify-center items-center">
    <div class="max-w-2xl w-full px-8 py-16 text-center rounded-3xl shadow-2xl bg-[#23272f]/90 backdrop-blur-lg border border-[#334155]">
      <img src="/avatar.png" alt="Nipul Kanishka" class="mx-auto w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-[#334155] bg-[#18181b]" />
      <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6] mb-4 drop-shadow-lg">
        {{ currentGreeting }}
      </h1>
      <p class="text-xl text-gray-200 mb-8">A passionate Software Engineering student, Front-end Developer & Data Science Enthusiast.</p>
      <div class="flex justify-center gap-4 mb-10">
        <a href="/about" class="px-6 py-2 bg-gradient-to-r from-[#818cf8] to-[#38bdf8] text-white rounded-full font-semibold shadow-lg hover:from-[#38bdf8] hover:to-[#818cf8] transition">About Me</a>
        <a href="/projects" class="px-6 py-2 bg-gradient-to-r from-[#f472b6] to-[#818cf8] text-white rounded-full font-semibold shadow-lg hover:from-[#818cf8] hover:to-[#f472b6] transition">Projects</a>
        <a href="/contact" class="px-6 py-2 bg-gradient-to-r from-[#38bdf8] to-[#f472b6] text-white rounded-full font-semibold shadow-lg hover:from-[#f472b6] hover:to-[#38bdf8] transition">Contact</a>
      </div>
      <div class="flex justify-center gap-8 text-3xl mt-4">
        <a href="https://github.com/nipulkanishka" target="_blank" class="text-[#38bdf8] hover:text-[#818cf8] transition" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/nipulkanishka" target="_blank" class="text-[#818cf8] hover:text-[#f472b6] transition" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="/resume" class="text-[#f472b6] hover:text-[#38bdf8] transition" aria-label="Resume"><i class="fas fa-file-alt"></i></a>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'

// Example: Animated greeting text
const greetings = [
  'Hi, I’m Nipul Kanishka',
  'Welcome to my portfolio',
  'Let\'s build something great!'
]
const currentGreeting = ref(greetings[0])
let greetingIndex = 0

if (process.client) {
  setInterval(() => {
    greetingIndex = (greetingIndex + 1) % greetings.length
    currentGreeting.value = greetings[greetingIndex]
  }, 3000)
}
</script>


