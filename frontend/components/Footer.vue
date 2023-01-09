<template>
  <footer class="footer">
    <p class="small">
      Say hello 👋
      <a href="mailto:lauraricher@gmail.com" class="footer__link">lauraricher@gmail.com</a>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
@import '../scss/resources';

.footer {
  padding: $spacer $spacer * 2;
  background-color: var(--color-black);
  color: var(--color-white);
  text-align: center;

  &__link {
    color: white;
    transition: color $animate-default;

    &:hover,
    &:focus {
      color: var(--color-purple-light);
    }
  }
}
</style>
