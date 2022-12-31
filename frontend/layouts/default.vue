<template>
  <header>
    <nav>
      <NuxtLink to="/">Laura Richer</NuxtLink>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <div>
    <slot />
  </div>

  <footer>
    <p>footer here</p>
  </footer>
</template>
