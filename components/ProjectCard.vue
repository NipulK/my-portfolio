<template>
  <div class="h-full flex flex-col bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-slate-800/60 transition">
    <img v-if="image" :src="image" :alt="title" class="w-full h-56 md:h-64 object-cover" />
    <div class="p-5 flex flex-col grow">
      <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
      <p class="text-slate-300 mb-4 grow">{{ description }}</p>
      <div>
        <a 
          :href="link" 
          target="_blank" 
          class="inline-block px-5 py-2 rounded-full font-semibold text-white bg-sky-500 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-slate-900"
        >
          View Project
        </a>
      </div>
    </div>
  </div>
 </template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
  image: String
})
</script>
