<script setup>
import articlesQuery from '@/apollo/queries/article/articles.gql';

const properties = defineProps({
  limit: {
    type: Number,
    default: undefined,
  },
});

const { data, pending } = await useAsyncQuery(articlesQuery, { limit: properties.limit });
</script>

<template>
  <ListsListWrap :v-if="!pending && data?.articles?.data" :show-button="!!limit">
    <div v-for="article in data?.articles?.data" :key="article.id">
      <CardsBlogCard :blog-id="article.id" v-bind="article.attributes" />
    </div>

    <template #button>
      <Button to="/blog" text="See all blog posts" button-type="secondary" />
    </template>
  </ListsListWrap>
</template>
