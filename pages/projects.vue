<template>
  <section class="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#0f172a] py-10 text-white">
    <div class="max-w-5xl mx-auto py-10">
      <h2 class="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6]">My Projects</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Greentips Plantation"
          description="Web-based system to manage farm operations."
          link="https://github.com/yourusername/greentips"
        />
        <ProjectCard
          title="EasyFood App"
          description="Android app for food ordering."
          link="https://github.com/yourusername/easyfood"
        />
      </div>
    </div>
  </section>

  <WaveDivider />
</template>

<script setup>
import ProjectCard from '~/components/ProjectCard.vue'
import WaveDivider from '~/components/WaveDivider.vue'
</script>
