<script setup>
import projectsQuery from "@/apollo/queries/project/projects.gql";

const { data } = await useAsyncQuery(projectsQuery);
</script>

<template>
  <section>
    Hero section
  </section>
  <section>
    <p>Projects</p>
    <ul v-if="data?.projects?.data">
      <li v-for="project in data.projects.data">
        <NuxtLink :to="`projects/${project.id}`" >{{ project.attributes.title }}</NuxtLink>
        {{ project.attributes.image.data.attributes.url }}
      </li>
    </ul>
  </section>
  <section>
    <p>Blog</p>
    <ul v-if="data?.projects?.data">
      <li v-for="project in data.projects.data">
        {{ project.attributes.title }}
        {{ project.attributes.image.data.attributes.url }}
      </li>
    </ul>
  </section>
</template>
