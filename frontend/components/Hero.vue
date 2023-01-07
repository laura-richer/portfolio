<script setup>
import homeQuery from '@/apollo/queries/home.gql';

const animate = ref(true);
const toggleAnimate = () => animate.value = window.scrollY === 0 ? true : false;
window.addEventListener('scroll', toggleAnimate);

const { data, pending } = await useAsyncQuery(homeQuery);
const { introtext, introsubtext, hero } = data.value.home.data.attributes;

onUnmounted(() => window.removeEventListener('scroll', toggleAnimate));
</script>

<template>
  <div v-if="!pending" class="hero">
    <figure class="hero__image">
      <img :src="`http://localhost:1337${hero.data.attributes.url}`" class="hero__image-element" />
    </figure>

    <div class="hero__content">
      <div class="hero__content-text">
        <h1 class="hero__introtext">{{ introtext }}</h1>
        <h2 class="hero__introsubtext">{{ introsubtext }}</h2>
      </div>
    </div>

    <a href="#projects" @click="animate = false">
      <i class="icon icon-arrow-down hero__anchor-button" :class="{'hero__anchor-button--animate': animate}"></i>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/resources';

.hero {
  position: relative;
  height: 75vh;

  &__image {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    &-element {
      width: 100%;
      height: 100%;
      animation-duration: 40s;
      animation-iteration-count: infinite;
      animation-name: kenburns;
      object-fit: cover;
    }
  }

  &__content {
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: $container-padding;
    background-color: var(--color-black-alpha-60);

    &-text {
      max-width: 900px;
      margin: 0 auto;
    }

    @media (min-width: $tablet) {
      align-items: center;
      text-align: center;
    }

    & * {
      color: var(--color-white);
    }
  }

  &__introtext {
    margin-bottom: $spacer * 2;
    font-size: 4rem;
    font-weight: 200;

    @media (min-width: $tablet) {
      font-size: 6rem;
    }
  }

  &__introsubtext {
    font-size: 1.8rem;
    font-weight: 400;

    @media (min-width: $tablet) {
      font-size: 2.4rem;
      font-weight: 500;
    }
  }

  &__anchor-button {
    position: absolute;
    right: 0;
    bottom: $spacer * 2;
    left: 0;
    width: 4.5rem;
    height: 4.5rem;
    margin: 0 auto;
    background-color: var(--color-white);
    transition: background-color $animate-default;

    &--animate {
      animation: bounce 2s ease infinite;
    }

    &:hover,
    &:focus {
      animation: none;
      background-color: var(--color-blue-light);
    }
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-30px);
  }

  60% {
    transform: translateY(-15px);
  }
}

@keyframes kenburns {
  0% {
    transform: scale(1.0);
    transform-origin: bottom left;
  }

  100% {
    transform: scale(1.2);
  }
}
</style>
