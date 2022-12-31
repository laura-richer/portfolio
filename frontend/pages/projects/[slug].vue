<script setup>
import projectQuery from '@/apollo/queries/project/project.gql';

const { slug } = useRoute().params;
const { data } = await useAsyncQuery(projectQuery, { id: slug });
const { title, overview, url, image, technologies } = data.value.project.data.attributes;
</script>

<template>
  <div>
    <p>Details for {{ slug }}</p>
    <p>{{ title }}</p>
    <p>{{ overview }}</p>
    <p>{{ url }}</p>
    <p>{{ image.data.attributes.url }}</p>

    <ul>
      <li v-for="technology in technologies.data" :key="technology.id">
        {{ technology.attributes.name }}
      </li>
    </ul>
  </div>
</template>
