<template>
  <div id="app" class="container">
    <router-view class="row center-screen py-3"/>
  </div>
</template>

<script>
// const axios = require('axios');

export default {
  name: 'App',
  components: {},
  data() {
    this.$i18n.locale = this.$route.query.lang || 'ru';
    return {}
  },
  watch: {
    $route(to, from) {
      this.$i18n.locale = to.query.lang || 'ru';
      console.log('from', from);
    }
  },
  mounted() {
    console.log('app');
  },
  methods: {}
}
</script>
