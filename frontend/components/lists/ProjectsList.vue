<script setup>
import projectsQuery from '@/apollo/queries/project/projects.gql';

const props = defineProps({
  limit: {
    type: Number,
    default: undefined,
  }
});

const { data, pending } = await useAsyncQuery(projectsQuery, { limit: props.limit });
</script>

<template>
  <ListsListWrap :v-if="!pending && data?.projects?.data" :show-button="!!limit">
    <div v-for="project in data?.projects?.data" :key="project.id">
      <CardsProjectCard :project-id="project.id" v-bind="project.attributes" />
    </div>

    <template #button>
      <Button to="/projects" text="See all projects" />
    </template>
  </ListsListWrap>
</template>
