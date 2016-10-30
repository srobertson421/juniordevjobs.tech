<template>
  <section>
    <jobs-list></jobs-list>
  </section>
</template>

<script>
  import JobsList from '../components/JobsList.vue';

  export default {
    name: 'home',
    mounted() {
      componentHandler.upgradeAllRegistered();
    },
    data() {
      return {};
    },
    components: {
      JobsList
    }
  }
</script>

<style></style>