<template>
  <section class="modern-hero-section">
    <client-only>
      <component :is="ParticlesBackground" class="absolute inset-0 z-0" />
    </client-only>
    <div class="modern-hero-content">
      <div class="modern-hero-box relative overflow-hidden">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-pink-400/20 rounded-full blur-2xl z-0 animate-pulse"></div>
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-pink-400/30 to-blue-400/20 rounded-full blur-2xl z-0 animate-pulse"></div>
        <img src="/avatar.png" alt="Nipul Kanishka" class="modern-hero-avatar mb-4 z-10 relative shadow-lg ring-4 ring-blue-400/20" />
        <h1 class="modern-hero-title mb-2 z-10 relative">About Me</h1>
        <p class="modern-hero-desc mb-6 z-10 relative">
          <span class="inline-block animate-slidein-left">I'm a <span class="font-semibold text-blue-400">Software Engineering student</span> passionate about <span class="font-semibold text-pink-400">front-end development</span> and <span class="font-semibold text-blue-300">data science</span>.<br>
          I love building beautiful, performant web apps and exploring new technologies.</span>
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-8 mb-6 mt-6 z-10 relative">
          <div class="bg-slate-700/95 rounded-xl p-6 border border-slate-500 shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
            <h3 class="text-xl font-bold text-blue-400 mb-2 flex items-center gap-2"style="color: #fff"><i class="fas fa-tools"></i> Skills</h3>
            <ul class="space-y-1 text-left list-none" style="color: #fff;">
              <li class="font-semibold" style="color: #fff;"> JavaScript / TypeScript </li>
              <li class="font-semibold" style="color: #fff;"> Vue.js / Nuxt.js </li>
              <li class="font-semibold" style="color: #fff;"> Tailwind CSS </li>
              <li class="font-semibold" style="color: #fff;"> Data Visualization </li>
            </ul>
          </div>
          <div class="bg-slate-700/95 rounded-xl p-6 border border-slate-500 shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
            <h3 class="text-xl font-bold text-pink-400 mb-2 flex items-center gap-2"style="color: #fff"><i class="fas fa-heart"></i> Interests</h3>
            <ul class="space-y-1 text-left list-none" style="color: #fff;">
              <li class="font-semibold" style="color: #fff;"> UI/UX Design </li>
              <li class="font-semibold" style="color: #fff;"> Machine Learning </li>
              <li class="font-semibold" style="color: #fff;"> Open Source </li>
              <li class="font-semibold" style="color: #fff;"> Blogging & Tech Writing </li>
            </ul>
          </div>
        </div>
        <div class="modern-hero-socials mt-2 z-10 relative">
          <a href="https://github.com/nipulkanishka" target="_blank" class="modern-hero-social github group" aria-label="GitHub">
            <span class="sr-only">GitHub</span>
            <i class="fab fa-github group-hover:scale-125 group-hover:text-blue-400 transition-transform"></i>
          </a>
          <a href="https://linkedin.com/in/nipulkanishka" target="_blank" class="modern-hero-social linkedin group" aria-label="LinkedIn">
            <span class="sr-only">LinkedIn</span>
            <i class="fab fa-linkedin group-hover:scale-125 group-hover:text-pink-400 transition-transform"></i>
          </a>
          <a href="mailto:nipulkanishka2003@gmail.com" class="modern-hero-social resume group" aria-label="Email">
            <span class="sr-only">Email</span>
            <i class="fas fa-envelope group-hover:scale-125 group-hover:text-yellow-400 transition-transform"></i>
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

/*0a0a0a*/
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
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 9999px;
  border: 3px solid #334155;
  background: #18181b;
  object-fit: cover;
  margin-bottom: 1rem;
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
  color: #ffffff;
  font-size: 1.08rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}
.about-box {
  background: rgba(24,24,27,0.85);
  border-radius: 1rem;
  padding: 1.2rem 1.3rem 1.1rem 1.3rem;
  border: 1.5px solid #334155;
  box-shadow: 0 2px 12px 0 #23272e33;
  min-width: 200px;
  margin-bottom: 0.5rem;
}
.about-box-title {
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  letter-spacing: -0.01em;
}
.about-box-list {
  color: #ffffff;
  font-size: 1.01rem;
  font-weight: 500;
  list-style: none;
  padding: 0;
  margin: 0;
}
.modern-hero-socials {
  display: flex;
  justify-content: center;
  gap: 2.2rem;
  font-size: 2rem;
  margin-top: 1rem;
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
</style>
