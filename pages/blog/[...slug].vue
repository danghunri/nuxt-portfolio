<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<script setup>
import { ContentRenderer } from "#components";

const route = useRoute();
const blogPath = computed(() => "/blog/" + route.params.slug.join("/"));

const { data: page } = await useAsyncData(() =>
  queryCollection("content").path(blogPath.value).first()
);

useContentHead(page);
</script>
