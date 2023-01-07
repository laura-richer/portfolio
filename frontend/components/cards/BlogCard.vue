<script setup>
defineProps({
  blogId: {
    type: String,
    default: undefined,
  },

  title: {
    type: String,
    default: undefined,
  },

  publishedAt: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <NuxtLink :to="`/blog/${blogId}`">
    <p>{{ title }}</p>
    <p>{{ publishedAt }}</p>
  </NuxtLink>
</template>
