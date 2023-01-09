<template>
  <header class="header">
    <NuxtLink to="/"><span class="header__logo">laura richer</span></NuxtLink>

    <nav class="header__nav">
      <ul class="header__nav-items">
        <li>
          <NuxtLink class="header__nav-item" to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink class="header__nav-item" to="/projects">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink class="header__nav-item" to="/blog">Blog</NuxtLink>
        </li>
      </ul>

      <ul class="header__nav-social header__nav-items">
        <li>
          <a href="https://github.com/laura-richer" class="header__nav-social-item" target="_blank">
            <i class="icon icon-github header__nav-social-icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '../scss/resources';

.header {
  position: fixed;
  z-index: 90;
  top: 0;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: $spacer $spacer * 2;
  background-color: var(--color-black-alpha-90);

  &__logo {
    color: var(--color-white);
    font-family: $font-family-headings;
    font-size: 2.8rem;
  }

  &__nav {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    &-items {
      display: flex;
      align-items: center;
    }

    // eslint-disable-next-line vue-scoped-css/no-unused-selector
    &-item {
      padding: 0 $spacer;
      color: var(--color-white);
      font-family: $font-family-body;
      font-size: 1.6rem;
      font-weight: 800;
      transition: color $animate-default;

      &:hover,
      &:focus,
      &.router-link-exact-active {
        color: var(--color-purple-light);
      }
    }
  }

  &__nav-social {
    margin-left: 1rem;

    &-icon {
      width: 2.5rem;
      height: 2.5rem;
      background-color: var(--color-white);
      transition: background-color $animate-default;

      &:hover,
      &:focus {
        background-color: var(--color-purple-light);
      }
    }
  }
}
</style>
