<template>
  <div>
    <Navbar />
    <main class="min-h-screen px-4 py-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>
