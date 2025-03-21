<template>
  <section class="not-prose">
    <ul>
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData("blog-list", () => {
  return queryCollection("content")
    .where("path", "LIKE", "/blog/%")
    .select("path", "title")
    .all();
});
console.log(posts.value);
</script>
