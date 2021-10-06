<template>
  <div class="main">
    <div class="main__base px-0">
      <div class="header col-12 d-inline-flex justify-content-between">
        <a href="#"><img src="../assets/logo.svg" alt=""></a>
        <div class="d-inline-flex main__lang">
          <div class="cursor-pointer lang-1" :class="{selected: $i18n.locale === 'RU'}" @click="changeLocale('RU')">RU
          </div>
          <div class="cursor-pointer lang-2" :class="{selected: $i18n.locale === 'UZ'}" @click="changeLocale('UZ')">UZ
          </div>
          <div class="cursor-pointer lang-3" :class="{selected: $i18n.locale === 'EN'}" @click="changeLocale('EN')">EN
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="main__title position-relative">
          <div class="main__title-1" v-html="$t('bgTitle-1')"></div>
          <div class="main__title-2 position-absolute">
            <img :src="require(`@/assets/cart.png`)" id='cart' alt="cart">
          </div>
          <div class="main__title-3" v-html="$t('bgTitle-2')"></div>
        </div>
      </div>
    </div>
    <div class="main__content px-0">
      <div class="text-center main__content-title" v-html="$t('tabs-title')"></div>
      <div class="main__tabs row mx-0">
        <div class="col-4">
          <div class="main__tab-title" v-html="$t('tabs-1')"></div>
        </div>
        <div class="col-4">
          <div class="main__tab-title second" v-html="$t('tabs-2')"></div>
        </div>
        <div class="col-4">
          <div class="main__tab-title" v-html="$t('tabs-3')"></div>
        </div>
      </div>
      <div class="main__tabs-content">
        <div class="row mx-0">
          <div class="col-4 px-5" v-html="$t('tabs-content-1')"></div>
          <div class="col-4 px-5" v-html="$t('tabs-content-2')"></div>
          <div class="col-4 px-5" v-html="$t('tabs-content-3')"></div>
        </div>
      </div>
    </div>
    <div class="main__footer px-0">
      <div class="row text-center mx-0">
        <a href="#" class="col-4" @click="openModal('modal', 1)" v-html="$t('footer-1')"></a>
        <a href="#" class="col-4" @click="openModal('modal', 2)" v-html="$t('footer-2')"></a>
        <a href="#" class="col-4" @click="openModal('modal', 3)" v-html="$t('footer-3')"></a>
      </div>
    </div>

    <b-modal id="modal" modal-class="text-center" hide-header hide-footer>
      <div class="modal__title" v-html="$t('modal-title')"></div>
      <form>
        <label><input type="text" :placeholder="$t('modal-1')"></label>
        <label><input type="email" :placeholder="$t('modal-2')"></label>
        <label><input type="tel" :placeholder="$t('modal-3')"></label>
        <div>
          <button v-html="$t('modal-send')"></button>
        </div>
      </form>
      <div class="modal__footer" v-html="$t('modal-footer')"></div>
    </b-modal>
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
    },
    openModal(id, action) {
      this.$bvModal.show(id);
      console.log('action', action);
    }
  }
}

</script>

<style lang="scss" scoped>
.header {
  padding: 20px;
}

.main__lang {
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #A2004B;
  border: 2px solid white;

  .lang-2 {
    border-left: 2px solid #E6E6E6;
  }

  .lang-3 {
    border-left: 2px solid #E6E6E6;
  }

  .lang-1.selected + .lang-2 {
    border-left: 2px solid transparent;
  }

  .lang-2.selected {
    border-left: 2px solid transparent;

    & + .lang-3 {
      border-left: 2px solid transparent;
    }
  }

  .lang-3.selected {
    border-left: 2px solid transparent;
  }

  div {
    padding: 6px 12px;
    background: white;

    &.selected {
      background: transparent;
      color: white;
    }
  }
}

.main__base {
  background: url('../assets/bg.svg');
  height: 800px;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -5;
    background: url('../assets/bg-magnum.svg');
  }
}

.main__title {
  font-style: normal;
  font-weight: 800;
  font-size: 150px;
  line-height: 150px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  cursor: default;
}

.main__title-1 {
  z-index: 3;
}

.main__title-2 {
  z-index: 2;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -43%)
}

.main__title-3 {
  z-index: 3;
  position: relative;
}

.main__content {
  margin: 80px 0;
}

.main__content-title {
  font-weight: 800;
  font-size: 40px;
  line-height: 46px;
  color: #A2004B;
}

.main__tabs {
  align-items: center;
  background: #A2004B;
  height: 80px;
  border-radius: 10px;
  margin: 40px 0;
}

.main__tab-title {
  font-size: 40px;
  color: white;
  text-transform: uppercase;
  text-align: center;

  &.second {
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
}

.main__tabs-content {
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #090909;
}

.main__footer {
  background: #F1F1F1;
  padding: 31px 0;

  a {
    font-size: 16px;
    line-height: 18px;
    color: #A2004B;
    text-decoration: none;
  }
}
</style>
