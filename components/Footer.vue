<template>
  <footer class="modern-footer">
    <div class="modern-footer-inner">
      <div class="modern-footer-brand">
        <img src="/avatar.png" alt="Nipul Logo" class="modern-footer-logo" />
        <span class="modern-footer-title">Nipul Kanishka</span>
      </div>
      <div class="modern-footer-links">
        <a href="https://github.com/NipulK" target="_blank" class="footer-btn">GitHub</a>
        <a href="https://linkedin.com/in/nipulkanishka" target="_blank" class="footer-btn">LinkedIn</a>
        <a href="mailto:nipulkanishka@gmail.com" class="footer-btn">Email</a>
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

/* Footer Links Container */
.modern-footer-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* Buttons inside footer links */
.footer-btn {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-radius: 1rem;
  background: rgba(20, 20, 20, 0.98);
  border: 1.5px solid #23272e;
  color: #38bdf8;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px 0 rgba(56, 189, 248, 0.07);
  backdrop-filter: blur(4px);
  cursor: pointer;
}

.footer-btn:hover {
  box-shadow: 0 0 25px 0 #818cf8cc;
  border-color: #818cf8;
  background: rgba(30, 30, 30, 0.98);
  color: #ffffff;
  transform: scale(1.05);
}

/* Copyright */
.modern-footer-copyright {
  color: #94a3b8;
  font-size: 0.98rem;
  margin-top: 1.2rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 700px) {
  .modern-footer-inner {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 0 1rem;
  }
  .footer-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
