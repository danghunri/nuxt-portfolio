<template>
  <div class="mx-auto container max-w-2xl">
    <Menu />
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - 이상훈",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Roboto";
}
</style>
