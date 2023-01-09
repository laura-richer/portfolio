<script setup>
import * as dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

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
  <NuxtLink :to="`/blog/${blogId}`" class="blog-card">
    <span class="blog-card__title">{{ title }}</span>
    <!-- <span class="blog-card__published">{{ dayjs(publishedAt, 'D-MMM-YYYY') }}</span> -->
    <span class="blog-card__published">{{ dayjs(publishedAt) }}</span>
    <span class="blog-card__cta">Read blog</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import '../../scss/global';

.blog-card {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: $spacer * 2;
  background-color: var(--color-white);

  &__title {
    margin-bottom: $spacer;
    color: var(--color-black);
    font-size: 2.4rem;
    font-weight: 200;
  }
}
</style>
