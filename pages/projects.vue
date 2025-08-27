<template>
  <section class="modern-hero-section">
    <client-only>
      <component :is="ParticlesBackground" class="absolute inset-0 z-0" />
    </client-only>
    <div class="modern-hero-content">
      <div class="modern-hero-box relative overflow-hidden max-w-[900px]">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-pink-400/20 rounded-full blur-2xl z-0 animate-pulse"></div>
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-pink-400/30 to-blue-400/20 rounded-full blur-2xl z-0 animate-pulse"></div>

        <h1 class="modern-hero-title mb-2 z-10 relative">Projects</h1>
        <p class="modern-hero-desc mb-4 z-10 relative">A selection of things I’ve built and shipped.</p>

        <div class="projects-grid mt-6 z-10 relative items-stretch content-stretch overflow-auto">
          <ProjectCard
            class="projects-page-card"
            title="Greentips Plantation"
            description="Web-based system to manage farm operations."
            link="https://github.com/gimz12/Greentips.git"
            image="plant.jpg"
          />
          <ProjectCard
            class="projects-page-card"
            title="EasyFood App"
            description="Android app for food ordering."
            link="https://github.com/gimz12/foodiehut.git"
            image="/food.jpg"
          />
          <ProjectCard
            class="projects-page-card"
            title="Eight Queens Game"
            description="A chess puzzle game to place 8 queens on a chessboard."
            link="https://github.com/NipulK/eight-queen-game.git"
              image="chess.jpg"
          />
          <ProjectCard
            class="projects-page-card"
            title="Cafe Management System"
            description="A desktop application to manage cafe operations."
            link="https://github.com/NipulK/cafe-management-system.git"
              image="cafe.jpg"
          />

        </div>
      </div>
    </div>
  </section>
  <WaveDivider />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import ProjectCard from '~/components/ProjectCard.vue'
import WaveDivider from '~/components/WaveDivider.vue'
const ParticlesBackground = defineAsyncComponent(() => import('~/components/ParticlesBackground.vue'))
</script>

<style scoped>
/* Force description text inside ProjectCard to white only on this page */
:deep(.projects-page-card p) {
  color: #ffffff;
  border-radius: 10%;
}
</style>

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
  justify-content: center;
  align-items: center;
}
.modern-hero-box:hover {
  box-shadow: 0 0 40px 0 #818cf8cc;
  border-color: #818cf8;
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
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  justify-items: center;
  align-items: stretch;
  width: 100%;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 0.5rem;
}
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }
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
</style>
