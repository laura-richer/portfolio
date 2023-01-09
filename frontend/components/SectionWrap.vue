<script setup>
defineProps({
  backgroundColor: {
    type: String,
    default: 'white',
  },
});
</script>

<template>
  <section :class="`section section--${backgroundColor}`">
    <div class="container">
      <div class="section__title">
        <slot name="title" />
      </div>
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../scss/resources';

.section {
  padding: $spacer * 5 0;

  @media (min-width: $desktop) {
    padding: $spacer * 10 0;
  }

  &__title {
    margin-bottom: $spacer * 5;
    text-align: center;

    :slotted(*) {
      font-size: 3.6rem;
      font-weight: 100;
    }
  }

  &--grey {
    background-color: var(--color-grey);
  }
}
</style>
