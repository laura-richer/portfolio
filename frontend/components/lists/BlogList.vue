<script setup>
import articlesQuery from '@/apollo/queries/article/articles.gql';

const props = defineProps({
  limit: {
    type: Number,
    default: undefined
  }
})

const { data, pending } = await useAsyncQuery(articlesQuery, { limit: props.limit });
</script>

<template>
  <div v-if="!pending">
    <ul v-if="data?.articles?.data">
      <li v-for="blog in data.articles.data" :key="blog.id">
        <NuxtLink :to="`/blog/${blog.id}`">
          <p>{{ blog.attributes.title }}</p>
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/blog" v-if="limit">See all blog posts</NuxtLink>
  </div>
</template>
