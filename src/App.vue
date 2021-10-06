<template>
  <div id="app" class="container-fluid">
    <router-view class="row"/>
  </div>
</template>

<script>
// const axios = require('axios');

export default {
  name: 'App',
  components: {},
  data() {
    this.$i18n.locale = 'RU';
    return {}
  },
  watch: {
    $route(to, from) {
      console.log('from', from);
    }
  },
  mounted() {
    console.log('app', this.$i18n.locale);
  },
  methods: {}
}
</script>
