<template>
  <footer class="modern-footer">
    <div class="modern-footer-inner">
      <div class="modern-footer-brand">
        <tab></tab><img src="/avatar.png" alt="Nipul Logo" class="modern-footer-logo" />
        <span class="modern-footer-title">Nipul Kanishka</span>
      </div>
      <div class="modern-footer-links">
        <a href="https://github.com/NipulK" target="_blank" class="modern-footer-link">GitHub</a>
        <a href="https://linkedin.com/in/nipulkanishka" target="_blank" class="modern-footer-link">LinkedIn</a>
        <a href="mailto:nipulkanishka@gmail.com" class="modern-footer-link">Email</a>
      </div>
    </div>
    <div class="modern-footer-copyright">
      © 2025 Nipul Kanishka. All rights reserved.
    </div>
  </footer>
  </template>
<style scoped>
.modern-footer {
  width: 100%;
  background: rgba(10, 10, 10, 0.92);
  box-shadow: 0 -8px 32px 0 rgba(0,0,0,0.18);
  border-top: 2px solid #23272e;
  position: relative;
  z-index: 40;
  padding: 2.2rem 0 1.2rem 0;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.modern-footer-inner {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.modern-footer-brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.modern-footer-logo {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: 2px solid #38bdf8;
  box-shadow: 0 2px 8px 0 rgba(56, 189, 248, 0.12);
  object-fit: cover;
  background: #0f172a;
}
.modern-footer-title {
  font-weight: 700;
  font-size: 1.1rem;
  color: #38bdf8;
  letter-spacing: -0.01em;
}


/*.modern-footer-links {
  display: flex;
  gap: 2.2rem;
  font-size: 1.05rem;
  font-weight: 500;
  align-items: center;
  background: rgba(20, 20, 20, 0.98);
  padding: 0.35rem 1.2rem;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px 0 rgba(56, 189, 248, 0.07);
  border: 1.5px solid #23272e;
  backdrop-filter: blur(4px);
  
  position: relative;
  right: 0;
  margin: left 10px;

    z-index: 10;
  width: 30%;
  display: flex;
  justify-content: center;

}
.modern-footer-link {
  color: #38bdf8;
  text-decoration: none;
  position: relative;
  padding: 0.2rem 0.7rem;
  border-radius: 9999px;
  transition: color 0.2s, background 0.2s, box-shadow 0.2s;
}
.modern-footer-link:hover {
  color: #fff;
  background: rgba(56,189,248,0.08);
  box-shadow: 0 2px 8px 0 rgba(56, 189, 248, 0.10);
} */

.modern-footer-links {
  display: flex;
  gap: 2.2rem;
  font-size: 1.05rem;
  font-weight: 500;
  align-items: center;
  background: rgba(20, 20, 20, 0.98);
  padding: 0.35rem 1.2rem;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px 0 rgba(56, 189, 248, 0.07);
  border: 1.5px solid #23272e;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease; /* Added transition for smooth hover */

  position: relative;
  right: 0;
  z-index: 10;
  width: 30%;
  display: flex;
  justify-content: center;
}

.modern-footer-links:hover {
  box-shadow: 0 0 40px 0 #818cf8cc;  /* Similar to hero box hover */
  border-color: #818cf8;            /* Change border color on hover */
  background: rgba(30, 30, 30, 0.98); /* Slightly lighter background */
  transform: scale(1.02); /* Small zoom effect */
}

.modern-footer-copyright {
  color: #94a3b8;
  font-size: 0.98rem;
  margin-top: 1.2rem;
  text-align: center;
}
@media (max-width: 700px) {
  .modern-footer-inner {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 0 1rem;
  }
  .modern-footer-links {
    gap: 1.2rem;
    font-size: 0.98rem;
    padding: 0.3rem 0.7rem;
  }
}
</style>



