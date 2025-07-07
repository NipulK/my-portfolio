<template>
  <div class="max-w-5xl mx-auto py-10">
    <h2 class="text-2xl font-bold mb-6">My Projects</h2>
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
</template>

<script setup>
import ProjectCard from '~/components/ProjectCard.vue'
</script>
