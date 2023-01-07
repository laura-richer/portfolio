<script setup>
defineProps({
  projectId: {
    type: String,
    default: undefined,
  },

  title: {
    type: String,
    default: undefined,
  },

  image: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <NuxtLink :to="`/projects/${projectId}`" class="card">
    <figure class="card__image">
      <img class="card__image-element" :src="`http://localhost:1337${image.data.attributes.url}`" :alt="image.data.attributes.alternativeText || title" />
    </figure>
    <span class="card__title">{{ title }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.card {
  position: relative;

  &__image {
    margin: 0;

    &-element {
      max-width: 100%;
      aspect-ratio: 6 / 4;
      object-fit: cover;
    }
  }

  &__title {
    position: absolute;
    z-index: 10;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    font-size: 1.8rem;
  }
}
</style>
