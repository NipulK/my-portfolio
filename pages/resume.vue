
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
        <h1 class="modern-hero-title">Resume</h1>
        <p class="modern-hero-desc">Download my latest resume or browse highlights below.</p>
        <div class="modern-hero-actions">
          <a href="/resume.pdf" download class="modern-hero-btn btn-blue">Download PDF</a>
          <a href="/contact" class="modern-hero-btn btn-gradient">Contact Me</a>
          <a href="https://linkedin.com/in/nipulkanishka" target="_blank" class="modern-hero-btn btn-pink">LinkedIn</a>
        </div>
        <div class="text-left text-gray-200 mt-2">
          <h3 class="text-xl font-bold text-blue-400 mb-2">Experience</h3>
          <ul class="mb-4">
            <li>• Front-end Developer Intern, NTB Bank (2025)</li>
            <li>• Data Science Trainee, DataCamp (2023)</li>
          </ul>
          <h3 class="text-xl font-bold text-blue-400 mb-2">Education</h3>
          <ul class="mb-5">
            <li>• Bsc in Software Engineering, NIBM University (2022-2026)</li>
          </ul>
        </div>
        <div class="modern-hero-socials">
          <a href="https://github.com/nipulkanishka" target="_blank" class="modern-hero-social github" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/nipulkanishka" target="_blank" class="modern-hero-social linkedin" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="/resume.pdf" download class="modern-hero-social resume" aria-label="Resume PDF">
            <i class="fas fa-file-alt"></i>
          </a>
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
  max-width: 900px;
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
  justify-content: center;
  align-items: center;
}
@media (min-width: 640px) {
  .modern-hero-actions {
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
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
.btn-blue { background: linear-gradient(90deg, #818cf8 0%, #38bdf8 100%); }
.btn-pink { background: linear-gradient(90deg, #f472b6 0%, #818cf8 100%); }
.btn-gradient { background: linear-gradient(90deg, #38bdf8 0%, #f472b6 100%); }
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
.modern-hero-social.github:hover { color: #818cf8; transform: scale(1.18) rotate(-8deg); }
.modern-hero-social.linkedin:hover { color: #f472b6; transform: scale(1.18) rotate(8deg); }
.modern-hero-social.resume:hover { color: #f472b6; transform: scale(1.18) rotate(4deg); }
@media (min-width: 768px) {
  .modern-hero-box {
    padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  }
}
@media (max-width: 640px) {
  .modern-hero-box {
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
    max-width: 98vw;
  }
  .modern-hero-title {
    font-size: 1.45rem;
  }
}

.mb-4 {
  color: #e5e7eb;
  font-size: 1.01rem;
}

.text-xl {
  color: #e5e7eb;
  font-size: 1.25rem;
}

.mb-5 {
  color: #e5e7eb;
  font-size: 1.01rem;

}
</style>
