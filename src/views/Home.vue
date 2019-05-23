<template>
  <div>
    <header-menu />
    <h1>{{msg}}</h1>
    <a
      :href="this.paypalurl"
      target="_top"
    >PayPal</a>
    <router-link :to="'account'">Account</router-link>
    <router-link :to="'login'">Login</router-link>
    <footer-link />
  </div>
</template>

<script>
import HeaderMenu from '../components/Header-Template'
import FooterLink from '../components/Footer-Template'
import { GetPayPal } from '../api/HttpService'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      paypalurl: '#'
    }
  },
  components: {
    HeaderMenu,
    FooterLink
  },
  mounted () {
    // GetPayPal().then(response => {
    //   this.paypalurl = response.data;
    // })
  }
}
</script>