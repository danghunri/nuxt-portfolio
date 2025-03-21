<template>
  <article
    class="dark:prose-invert dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-300 prose prose-pre:bg-white prose-pre:text-gray-700"
  >
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<script setup>
import { ContentRenderer } from "#components";

const route = useRoute();
const blogPath = computed(
  () => "/blog" + (route.params.slug ? "/" + route.params.slug.join("/") : "")
);
console.log(blogPath.value);
const { data: page } = await useAsyncData(() =>
  queryCollection("content").path(blogPath.value).first()
);

useContentHead(page);
</script>
