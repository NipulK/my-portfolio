<template>
  <nav class="flex justify-between items-center px-8 py-4 bg-white/80 shadow-lg sticky top-0 z-50 backdrop-blur-md">
    <div class="flex items-center gap-3">
      <img src="/avatar.png" alt="Nipul Logo" class="w-10 h-10 rounded-full border-2 border-blue-500 shadow" />
      <span class="font-extrabold text-2xl text-blue-700 tracking-tight">Nipul</span>
    </div>
    <ul class="flex gap-6 text-lg font-medium">
      <li><NuxtLink to="/" class="hover:text-blue-600 transition-colors px-2 py-1 rounded-lg" active-class="bg-blue-100 text-blue-700">Home</NuxtLink></li>
      <li><NuxtLink to="/about" class="hover:text-blue-600 transition-colors px-2 py-1 rounded-lg" active-class="bg-blue-100 text-blue-700">About</NuxtLink></li>
      <li><NuxtLink to="/projects" class="hover:text-blue-600 transition-colors px-2 py-1 rounded-lg" active-class="bg-blue-100 text-blue-700">Projects</NuxtLink></li>
      <li><NuxtLink to="/resume" class="hover:text-blue-600 transition-colors px-2 py-1 rounded-lg" active-class="bg-blue-100 text-blue-700">Resume</NuxtLink></li>
      <li><NuxtLink to="/contact" class="hover:text-blue-600 transition-colors px-2 py-1 rounded-lg" active-class="bg-blue-100 text-blue-700">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>
