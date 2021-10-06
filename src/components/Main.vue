<template>
  <div class="main">
    <div class="main__base px-0">
      <div class="header col-12 d-inline-flex justify-content-between">
        <a href="#"><img src="../assets/logo.svg" alt=""></a>
        <div class="d-inline-flex main__lang">
          <div class="cursor-pointer test1" :class="{selected: $i18n.locale === 'RU'}" @click="changeLocale('RU')">RU
          </div>
          <div class="cursor-pointer test2" :class="{selected: $i18n.locale === 'UZ'}" @click="changeLocale('UZ')">UZ
          </div>
          <div class="cursor-pointer test3" :class="{selected: $i18n.locale === 'EN'}" @click="changeLocale('EN')">EN
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="main__title position-relative">
          <div class="main__title-1" v-html="$t('bgTitle-1')">ОТКРЫВАЕМ</div>
          <div class="main__title-2 position-absolute">
            <img :src="require(`@/assets/cart.png`)" id='cart' alt="cart">
          </div>
          <div class="main__title-3" v-html="$t('bgTitle-2')">СЕКРЕТ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const axios = require('axios');

export default {
  name: 'Main',
  props: {},
  data() {
    return {}
  },
  mounted() {
    console.log('Main');
  },
  methods: {
    changeLocale(value) {
      this.$i18n.locale = value;
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
