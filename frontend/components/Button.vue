<script setup>
defineProps({
  to: {
    type: String,
    default: undefined,
  },

  text: {
    type: String,
    default: 'Text here',
  },

  buttonType: {
    type: String,
    default: 'primary',
  },
});
</script>

<template>
  <NuxtLink :class="`button button--${buttonType}`" :to="to">
    <span class="button__inner">{{ text }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
// eslint-disable vue-scoped-css/no-unused-selector
// stylelint-disable property-no-vendor-prefix

@import '../scss/resources';

.button {
  $self: &;

  position: relative;
  padding: $spacer $spacer * 1.75;
  border: none;
  background-color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;

  &:before,
  &:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border: none;
    content: '';
    opacity: 0;
  }

  &:before {
    top: -3px;
    left: 0;
  }

  &:after {
    right: 0;
    bottom: -3px;
  }

  &__inner {
    background-color: var(--color-white);
    background-repeat: repeat;
    background-size: 100%;
    /* stylelint-disable-next-line order/properties-order */
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  &:hover,
  &:focus {
    &:before,
    &:after {
      width: 100%;
      height: calc(100% + 3px);
      opacity: 1;
    }

    &:before {
      transition: width calc($animation-duration / 2) cubic-bezier(0.07, 0.62, 0.61, 1),
        height calc($animation-duration / 4) calc($animation-duration / 2)
          cubic-bezier(0.07, 0.62, 0.61, 1),
        opacity $animation-duration ease-in-out;
    }

    &:after {
      transition: width calc($animation-duration / 2) calc($animation-duration / 2 * 1.5)
          cubic-bezier(0.07, 0.62, 0.61, 1),
        height calc($animation-duration / 4) calc($animation-duration * 1.5)
          cubic-bezier(0.07, 0.62, 0.61, 1),
        border-left 0s calc($animation-duration / 2 * 1.5) linear,
        opacity $animation-duration ease-in-out;
    }
  }

  &--primary {
    #{ $self }__inner {
      background-image: linear-gradient(90deg, var(--color-purple-light), var(--color-pink));
    }

    &:hover,
    &:focus {
      #{ $self }__inner {
        background-image: linear-gradient(90deg, var(--color-pink), var(--color-purple-light));
      }

      &:before {
        border-top: 3px solid var(--color-purple-light);
        border-right: 3px solid var(--color-purple-light);
      }

      &:after {
        border-bottom: 3px solid var(--color-purple-light);
        border-left: 3px solid var(--color-purple-light);
      }
    }
  }

  &--secondary {
    #{ $self }__inner {
      background-image: linear-gradient(90deg, var(--color-blue), var(--color-blue-light));
    }

    &:hover,
    &:focus {
      #{ $self }__inner {
        background-image: linear-gradient(90deg, var(--color-blue-light), var(--color-blue));
      }

      &:before {
        border-top: 3px solid var(--color-blue);
        border-right: 3px solid var(--color-blue);
      }

      &:after {
        border-bottom: 3px solid var(--color-blue);
        border-left: 3px solid var(--color-blue);
      }
    }
  }
}
</style>
