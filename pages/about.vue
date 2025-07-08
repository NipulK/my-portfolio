<template>
  <section class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#23272f] to-[#18181b] py-12 px-4">
    <div class="max-w-3xl w-full bg-white/90 rounded-2xl shadow-xl p-8 md:p-12 text-center backdrop-blur-md border border-[#334155]">
      <img src="/avatar.png" alt="Nipul Kanishka" class="mx-auto w-28 h-28 md:w-32 md:h-32 rounded-full shadow-lg mb-6 border-4 border-[#334155] bg-[#18181b] object-cover" />
      <h2 class="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">About Me</h2>
      <p class="text-lg md:text-xl text-gray-700 mb-6">
        I’m a <span class="font-semibold text-blue-600">Software Engineering student</span> passionate about <span class="font-semibold text-pink-500">front-end development</span> and <span class="font-semibold text-blue-400">data science</span>.<br>
        I love building beautiful, performant web apps and exploring new technologies.
      </p>
      <div class="flex flex-col md:flex-row justify-center gap-8 mb-6">
        <div>
          <h3 class="text-xl font-bold text-blue-600 mb-2">Skills</h3>
          <ul class="text-gray-800 space-y-1">
            <li>• JavaScript / TypeScript</li>
            <li>• Vue.js / Nuxt.js</li>
            <li>• Tailwind CSS</li>
            <li>• Python, Pandas, NumPy</li>
            <li>• Data Visualization</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-blue-600 mb-2">Interests</h3>
          <ul class="text-gray-800 space-y-1">
            <li>• UI/UX Design</li>
            <li>• Machine Learning</li>
            <li>• Open Source</li>
            <li>• Blogging & Tech Writing</li>
            <li>• Hackathons</li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center gap-6 mt-4 text-2xl">
        <a href="https://github.com/nipulkanishka" target="_blank" class="text-[#23272f] hover:text-blue-600 transition" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/nipulkanishka" target="_blank" class="text-[#23272f] hover:text-blue-600 transition" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:nipulkanishka2003@gmail.com" class="text-[#23272f] hover:text-blue-600 transition" aria-label="Email"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
  </section>
</template>
