<template>
  <section>
    <jobs-list></jobs-list>
  </section>
</template>

<script>
  import JobsList from '../components/JobsList.vue';

  export default {
    name: 'home',
    data() {
      return {};
    },
    components: {
      JobsList
    }
  }
</script>

<style></style>