<template>
  <header class="flex justify-between items-center mt-5">
    <div>
      <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">
        이상훈
      </NuxtLink>
    </div>
    <nav class="font-mono font-">
      <ul class="flex space-x-4">
        <li>
          <NuxtLink to="/" class="link">Main</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="link">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200;
}
</style>
