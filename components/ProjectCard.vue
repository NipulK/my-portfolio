<template>
  <div class="border rounded-xl shadow-md p-4 hover:shadow-lg transition">
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-3">{{ description }}</p>
    <a :href="link" target="_blank" class="text-blue-500 underline">View Project</a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String
})
</script>
