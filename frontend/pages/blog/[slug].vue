<script setup>
import articleQuery from '@/apollo/queries/article/article.gql';

const { slug } = useRoute().params;
const { data } = await useAsyncQuery(articleQuery, { id: slug });
const { title, content, image, categories } = data.value.article.data.attributes;
</script>

<template>
  <SectionWrap>
    <template #title>
      <h2>{{ title }}</h2>
    </template>

    <p>Details for {{ slug }}</p>
    <p>{{ content }}</p>
    <p>{{ image.data.attributes.url }}</p>

    <ul>
      <li v-for="category in categories.data" :key="category.id">
        {{ category.attributes.name }}
      </li>
    </ul>
  </SectionWrap>
</template>
