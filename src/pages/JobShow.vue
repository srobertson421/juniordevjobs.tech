<template>
  <section class="mdl-grid">
    <div class="mdl-cell mdl-cell--10-col mdl-cell--1-offset">
      <h1>{{job.title}}</h1>
      <p>{{job.description}}</p>
    </div>
  </section>
</template>

<script>
  import db from '../services/firebase-service.js';

  export default {
    data() {
      return {
        
      }
    },
    firebase() {
      return {
        job: {
          source: db.ref('jobs/' + this.$route.params.id),
          asObject: true
        }
      }
    }
  }
</script>

<style></style>