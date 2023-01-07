<template>
  <div>
    <Hero />

    <SectionWrap id="projects">
      <template #title>
        <h3>Projects</h3>
      </template>
      <ListsProjectsList :limit="3" />
    </SectionWrap>

    <SectionWrap background-color="grey">
      <template #title>
        <h3>Blog</h3>
      </template>

      <ListsBlogList :limit="3" />
    </SectionWrap>
  </div>
</template>
