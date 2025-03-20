<template>
  <article class="prose dark:prose-invert prose-h1:text-2xl">
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<script setup>
import { ContentRenderer } from "#components";

// definePageMeta({
//   layout: "another",
// });

useHead({
  title: "About",
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path("/about").first();
});
</script>
