<template>
  <nav class="modern-navbar">
    <div class="modern-navbar-inner">
      <div class="modern-navbar-brand">
        <img src="/avatar.png" alt="Nipul Logo" class="modern-navbar-logo" />
        <span class="modern-navbar-title">Nipul</span>
      </div>
      <div class="modern-navbar-links">
        <a href="/" class="modern-link" exact-active-class="nuxt-link-exact-active">Home</a >
        <a href="/about" class="modern-link" exact-active-class="nuxt-link-exact-active">About</a >
        <a href="/projects" class="modern-link" exact-active-class="nuxt-link-exact-active">Projects</a >
        <a href="/resume" class="modern-link" exact-active-class="nuxt-link-exact-active">Resume</a >
        <a href="/contact" class="modern-link" exact-active-class="nuxt-link-exact-active">Contact</a >
      </div>
    </div>
  </nav>
</template>

<script setup>
// No import needed for NuxtLink in template, Nuxt auto-imports it. Remove manual import.
</script>

<style scoped>

/* Black glassy navbar */
.modern-navbar {
  width: 100%;
  background: rgba(10, 10, 10, 0.92);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.22);
  backdrop-filter: blur(18px);
  border-bottom: 2px solid black;
  position: sticky;
  top: 0;
  z-index: 50;
  transition: box-shadow 0.3s cubic-bezier(.4,2,.6,1), background 0.3s;
}
.modern-navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
}
.modern-navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.modern-navbar-logo {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: 2px solid #38bdf8;
  box-shadow: 0 2px 8px 0 ;
  /*rgba(56, 189, 248, 0.15);*/
  object-fit: cover;
  background: #0f172a;
}
.modern-navbar-title {
  font-weight: 800;
  font-size: 1.35rem;
  letter-spacing: -0.01em;
  color: #38bdf8;
  text-shadow: 0 2px 8px rgba(56,189,248,0.08);
}
/* Modern boxed nav links area with tab-like spacing */
.modern-navbar-links {
  display: flex;
  gap: 2.6rem;
  font-size: 1.12rem;
  font-weight: 600;
  align-items: center;
  background: rgba(20, 20, 20, 0.98);
  padding: 0.5rem 2.2rem;
  border-radius: 1.1rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
  border: 2.5px solid #38bdf8;
  outline: 2.5px solid #23272e;
  outline-offset: 6px;
  backdrop-filter: blur(8px);
  min-width: 420px;
}

/* Modern nav link with animated underline */
.modern-link {
  position: relative;
  overflow: hidden;
  color: #38bdf8;
  padding: 1rem 1rem;
  border-radius: 9999px;
  transition: color 0.22s ,background 0.22s, box-shadow 0.22s;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  z-index: 1;
}
.modern-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 3px;
  background: linear(90deg, #38bdf8 0%, #818cf8 100%);
  border-radius: 1px;
  opacity: 0.7;
  transition: width 0.3s cubic-bezier(.4,2,.6,1), left 0.3s cubic-bezier(.4,2,.6,1), opacity 0.2s;
}
.modern-link:hover {
  background: rgba(56,189,248,0.08);
  color: #fff;
}

.modern-link:hover::after, .modern-link.nuxt-link-exact-active::after {
  animation: underline 0.45s cubic-bezier(.4,2,.6,1) forwards;
  opacity: 1;
}
.modern-link.nuxt-link-exact-active {
  color: #fff;
  font-weight: bold;
  background: rgba(56,189,248,0.13);
  box-shadow: 0 4px 16px 0 rgba(56, 189, 248, 0.13);
  border-bottom: 3px solid ;
  border-radius: 0 0 6px 6px;
}
@keyframes underline {
  0% {
    left: 0;
    width: 50%;
    opacity: 0.5;
  }
  60% {
    left: 0;
    width: 110%;
    opacity: 1;
  }
  100% {
    left: 0;
    width: 100%;
    opacity: 1;
  }
}


</style>
