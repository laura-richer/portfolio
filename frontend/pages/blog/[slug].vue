<script setup>
import articleQuery from "@/apollo/queries/article/article.gql";

const { slug } = useRoute().params;
const { data } = await useAsyncQuery(articleQuery, { id: slug });
console.log(data);
const { title, content, image, categories } = data.value.article.data.attributes;
</script>

<template>
  <p>Details for {{ slug }}</p>
  <p>{{ title }}</p>
  <p>{{ content }}</p>
  <p>{{ image.data.attributes.url }}</p>

  <ul>
    <li v-for="category in categories.data">
      {{ category.attributes.name }}
    </li>
  </ul>
</template>
