<template>
  <div>
    <h1>{{msg}}</h1>
    <input type="text" v-model="input1" >
    <input type="password" v-model="input2" >
    <input type="button" @click="clickLogin" value="Login">
  </div>
</template>

<script>
import { UserLogin } from '../api/HttpService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Login',
      paypalurl: ''
    }
  },
  mounted () {
    var postUser = {
      name: "admin",
      password: "123"
    }

  },
  methods: {
    clickLogin () {
      let name = this.input1
      let password = this.input2
      UserLogin({ name: name, password: password }).then(response => {
        if (response.data == 'ok') {
          alert('success')
        }
      })
    }
  }
}
</script>
