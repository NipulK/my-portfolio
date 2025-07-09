<template>
  <section class="modern-hero-section">
    <client-only>
      <component :is="ParticlesBackground" class="absolute inset-0 z-0" />
    </client-only>
    <div class="modern-hero-content">
      <div class="modern-hero-box">
        <img 
          src="/avatar.png" 
          alt="Nipul Kanishka" 
          class="modern-hero-avatar"
        />
        <h1 class="modern-hero-title">{{ currentGreeting }}</h1>
        <p class="modern-hero-desc">
          A passionate Software Engineering student, Front-end Developer & Data Science Enthusiast.
        </p>
        <div class="modern-hero-actions">
          <a href="/about" class="modern-hero-btn btn-blue">About Me</a>
          <a href="/projects" class="modern-hero-btn btn-pink">Projects</a>
          <a href="/contact" class="modern-hero-btn btn-gradient">Contact</a>
        </div>
        <div class="modern-hero-socials">
          <a href="https://github.com/nipulkanishka" target="_blank" class="modern-hero-social github" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/nipulkanishka" target="_blank" class="modern-hero-social linkedin" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="/resume" class="modern-hero-social resume" aria-label="Resume">
            <i class="fas fa-file-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Divider -->
  <WaveDivider />
</template>


<style scoped>

.modern-hero-section {
  position: relative;
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.modern-hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modern-hero-box {
  max-width: 480px;
  width: 100%;
  padding: 2.5rem 2rem 2.5rem 2rem;
  border-radius: 1.5rem;
  background: rgba(20,20,20,0.98);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.22);
  border: 2.5px solid #38bdf8;
  outline: 2.5px solid #23272e;
  outline-offset: 6px;
  text-align: center;
  backdrop-filter: blur(8px);
  transition: box-shadow 0.3s, border 0.3s;
}
.modern-hero-box:hover {
  box-shadow: 0 0 40px 0 #818cf8cc;
  border-color: #818cf8;
}
.modern-hero-avatar {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 9999px;
  border: 3px solid #334155;
  background: #18181b;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 16px 0 #23272e44;
}
.modern-hero-title {
  font-size: 2.2rem;
  font-weight: 800;
  background: linear-gradient(90deg, #38bdf8 0%, #818cf8 60%, #f472b6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
  margin-bottom: 1.1rem;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 8px #23272e22;
}
.modern-hero-desc {
  color: #e5e7eb;
  font-size: 1.08rem;
  margin-bottom: 2rem;
  font-weight: 500;
}
.modern-hero-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.7rem;
}
@media (min-width: 640px) {
  .modern-hero-actions {
    flex-direction: row;
    gap: 1.5rem;
  }
}
.modern-hero-btn {
  display: inline-block;
  padding: 0.7rem 2.1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.08rem;
  box-shadow: 0 2px 12px 0 #23272e33;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  background: #18181b;
  color: #fff;
  border: none;
  outline: none;
}
.btn-blue {
  background: linear-gradient(90deg, #818cf8 0%, #38bdf8 100%);
}
.btn-pink {
  background: linear-gradient(90deg, #f472b6 0%, #818cf8 100%);
}
.btn-gradient {
  background: linear-gradient(90deg, #38bdf8 0%, #f472b6 100%);
}
.modern-hero-btn:hover {
  filter: brightness(1.15) saturate(1.2);
  box-shadow: 0 4px 24px 0 #818cf855;
}
.modern-hero-socials {
  display: flex;
  justify-content: center;
  gap: 2.2rem;
  font-size: 2rem;
  margin-top: 1.2rem;
}
.modern-hero-social {
  color: #38bdf8;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
}
.modern-hero-social.github:hover {
  color: #818cf8;
  transform: scale(1.18) rotate(-8deg);
}
.modern-hero-social.linkedin:hover {
  color: #f472b6;
  transform: scale(1.18) rotate(8deg);
}
.modern-hero-social.resume:hover {
  color: #f472b6;
  transform: scale(1.18) rotate(4deg);
}
/* Background Animation */



</style>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
import WaveDivider from '~/components/WaveDivider.vue'

// Dynamically import ParticlesBackground only on client
const ParticlesBackground = defineAsyncComponent(() => import('~/components/ParticlesBackground.vue'))

const greetings = [
  'Welcome to my portfolio',
  'Let’s build something great!'
]
const currentGreeting = ref(greetings[0])
let greetingIndex = 0

if (typeof window !== 'undefined') {
  setInterval(() => {
    greetingIndex = (greetingIndex + 1) % greetings.length
    currentGreeting.value = greetings[greetingIndex]
  }, 2000) // Change greeting every 3 seconds
}
</script>