<template>
  <div>This page is about me.</div>
  <button @click="enableCustomLayout">Enable custom layout</button>
</template>

<script setup>
// definePageMeta({
//   layout: "another",
// });

useHead({
  title: "About",
});

function enableCustomLayout() {
  setPageLayout("another");
}
</script>
