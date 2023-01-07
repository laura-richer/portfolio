<script setup>
defineProps({
  showButton: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <div class="list">

    <div class="list__grid">
      <slot />
    </div>

    <div class="list__button" v-if="showButton">
      <slot name="button" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  &__grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  &__button {
    margin-top: 4rem;
    text-align: center;
  }
}
</style>
