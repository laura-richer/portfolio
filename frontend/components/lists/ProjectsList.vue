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
  <div v-if="!pending && data?.projects?.data" class="list">
    <div class="list__grid">
      <div v-for="project in data?.projects?.data" :key="project.id">
        <CardsProjectCard :project-id="project.id" v-bind="project.attributes" />
      </div>
    </div>

    <div class="list__button">
      <Button to="/projects" text="See all projects" v-if="limit" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  &__grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  &__button {
    margin-top: 4rem;
    text-align: center;
  }
}
</style>
