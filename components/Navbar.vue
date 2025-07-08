<template>
  <nav class="modern-navbar">
    <div class="modern-navbar-inner">
      <div class="modern-navbar-brand">
        <img src="/avatar.png" alt="Nipul Logo" class="modern-navbar-logo" />
        <span class="modern-navbar-title">Nipul</span>
      </div>
      <div class="modern-navbar-links">
        <NuxtLink to="/" class="modern-link" exact-active-class="nuxt-link-exact-active">Home</NuxtLink>
        <NuxtLink to="/about" class="modern-link" exact-active-class="nuxt-link-exact-active">About</NuxtLink>
        <NuxtLink to="/projects" class="modern-link" exact-active-class="nuxt-link-exact-active">Projects</NuxtLink>
        <NuxtLink to="/resume" class="modern-link" exact-active-class="nuxt-link-exact-active">Resume</NuxtLink>
        <NuxtLink to="/contact" class="modern-link" exact-active-class="nuxt-link-exact-active">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>

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
.modern-navbar-links {
  display: flex;
  gap: 2.2rem;
  font-size: 1.12rem;
  font-weight: 600;
  align-items: center;
  background: rgba(20, 20, 20, 0.98);
  padding: 0.5rem 1.6rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
  border: 2.5px solid #38bdf8;
  outline: 2.5px solid #23272e;
  outline-offset: 4px;
  backdrop-filter: blur(6px);
}
.modern-link {
  position: relative;
  overflow: hidden;
  color: #38bdf8;
  padding: 0.0rem 0.0rem;
  border-radius: 9999px;
  transition: color 0.2s, background 0.2s, box-shadow 0.2s;
  background: transparent;
}

@keyframes slide-underline {
  0% {
    left: 50%;
    width: 0;
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
.modern-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #38bdf8 0%, #818cf8 100%);
  border-radius: 2px;
  opacity: 0.7;
  transition: width 0.3s cubic-bezier(.4,2,.6,1), left 0.3s cubic-bezier(.4,2,.6,1), opacity 0.2s;
}
.modern-link:hover {
  color: #fff;
  background: rgba(56,189,248,0.08);
  box-shadow: 0 2px 8px 0 rgba(56, 189, 248, 0.10);
}
.modern-link:hover::after, .modern-link.nuxt-link-exact-active::after {
  animation: slide-underline 0.45s cubic-bezier(.4,2,.6,1) forwards;
  opacity: 1;
}
.modern-link.nuxt-link-exact-active {
  color: #fff;
  font-weight: bold;
  background: rgba(56,189,248,0.13);
  box-shadow: 0 4px 16px 0 rgba(56, 189, 248, 0.13);
}



</style>
