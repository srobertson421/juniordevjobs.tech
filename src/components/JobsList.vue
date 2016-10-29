<template>
  <section class="mdl-grid">
    <div class="mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--12-col-phone" v-for="job in jobs">
      <div class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
          <h3>{{job.title}}</h3>
        </div>
        <div class="mdl-card__supporting-text">
          {{truncated(job.description)}}
        </div>
        <div class="mdl-card__actions">
          <router-link tag="button" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored" :to="{name: 'jobShow', params: {id: job['.key']}}">Read More</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import db from '../services/firebase-service.js';
  export default {
    name: 'jobsList',
    data() {
      return {};
    },
    methods: {
      truncated(desc) {
        return desc.substring(0, 100) + '...'
      }
    },
    firebase() {
      return {
        jobs: db.ref('jobs').limitToLast(100)
      }
    }
  }
</script>

<style scoped>
  .mdl-grid {
    padding: 0;
  }
  .mdl-card {
    width: initial;
  }
</style>