<template>
  <section class="relative min-h-screen bg-black flex flex-col justify-center items-center overflow-hidden">
    <client-only>
      <ParticlesBackground class="absolute inset-0 z-0" />
    </client-only>
    <div class="relative z-10 w-full flex justify-center">
      <div
        class="max-w-2xl w-full px-4 sm:px-8 py-10 sm:py-16 text-center rounded-3xl shadow-2xl bg-[#23272f]/80 backdrop-blur-lg border border-[#334155] hover:shadow-[0_0_30px_rgba(129,140,248,0.6)] transition-all duration-500"
      >
        <img 
          src="/avatar.png" 
          alt="Nipul Kanishka" 
          class="mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full shadow-lg mb-6 border-4 border-[#334155] bg-[#18181b] object-cover"
        />

        <h1
          class="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6] mb-4 drop-shadow-lg"
        > 
          {{ currentGreeting }}
        </h1> 
        <p class="text-base sm:text-xl text-gray-200 mb-8">
          A passionate Software Engineering student, Front-end Developer &
          Data Science Enthusiast.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10">
          <a
            href="/about"
            class="px-6 py-2 bg-gradient-to-r from-[#818cf8] to-[#38bdf8] text-white rounded-full font-semibold shadow-lg hover:from-[#38bdf8] hover:to-[#818cf8] transition w-full sm:w-auto"
          >
            About Me
          </a>
          <a
            href="/projects"
            class="px-6 py-2 bg-gradient-to-r from-[#f472b6] to-[#818cf8] text-white rounded-full font-semibold shadow-lg hover:from-[#818cf8] hover:to-[#f472b6] transition w-full sm:w-auto"
          >
            Projects
          </a>
          <a
            href="/contact"
            class="px-6 py-2 bg-gradient-to-r from-[#38bdf8] to-[#f472b6] text-white rounded-full font-semibold shadow-lg hover:from-[#f472b6] hover:to-[#38bdf8] transition w-full sm:w-auto"
          >
            Contact
          </a>
        </div>

        <div class="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl mt-4">
          <a
            href="https://github.com/nipulkanishka"
            target="_blank"
            class="text-[#38bdf8] hover:text-[#818cf8] transition transform hover:scale-125"
            aria-label="GitHub"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/nipulkanishka"
            target="_blank"
            class="text-[#818cf8] hover:text-[#f472b6] transition transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="/resume"
            class="text-[#f472b6] hover:text-[#38bdf8] transition transform hover:scale-125"
            aria-label="Resume"
          >
            <i class="fas fa-file-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Divider -->
  <WaveDivider />
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
const ParticlesBackground = defineAsyncComponent(() => import('~/components/ParticlesBackground.vue'))
import WaveDivider from '~/components/WaveDivider.vue'

const greetings = [
  'Welcome to my portfolio',
  'Let’s build something great!'
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
