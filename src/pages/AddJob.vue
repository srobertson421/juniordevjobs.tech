<template>
  <form action="#">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--6-col">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="new-job-title" v-model="newJob.title">
          <label class="mdl-textfield__label" for="new-job-title">Job Title</label>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="new-job-company" v-model="newJob.company">
          <label class="mdl-textfield__label" for="new-job-company">Company</label>
        </div>
      </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--6-col">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="url" id="new-job-website" v-model="newJob.website">
          <label class="mdl-textfield__label" for="new-job-website">Job URL</label>
          <span class="mdl-textfield__error">Input is not a valid url!</span>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="new-job-remote">
          <input type="checkbox" id="new-job-remote" class="mdl-checkbox__input" v-model="newJob.remoteOk">
          <span class="mdl-checkbox__label">Remote Ok?</span>
        </label>
      </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="mdl-textfield mdl-js-textfield">
          <textarea class="mdl-textfield__input" type="text" rows="3" id="new-job-description" v-model="newJob.description"></textarea>
          <label class="mdl-textfield__label" for="new-job-description">Job Description</label>
        </div>
      </div>
    </div>
    <button type="button" v-on:click="submitJob" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
      Submit
    </button>
  </form>
</template>

<script>
  import db from '../services/firebase-service.js';
  export default {
    name: 'addJob',
    mounted() {
      componentHandler.upgradeAllRegistered();
    },
    data() {
      return {
        newJob: {
          title: '',
          company: '',
          description: '',
          keywords: [],
          website: '',
          remoteOk: false
        }
      };
    },
    methods: {
      submitJob() {
        db.ref('jobs').push(this.newJob);
        this.$router.push('/');
      }
    }
  }
</script>

<style>
  @import url("https://code.getmdl.io/1.2.1/material.teal-blue.min.css");
</style>