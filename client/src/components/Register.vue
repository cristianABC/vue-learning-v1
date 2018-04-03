<template>
  <div>
    <v-layout column>
      <v-flex xs6 offset-xs3v-btn    <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
           <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
           <div class="pl-4 pr-4 pt-2 pb-2">
            <input type="email" name="email" placeholder="email" v-model="email"/>
            <br>
            <input type="password" name="password" placeholder="password" v-model="password"/>
            <br>
            <div class="error" v-html="error"/>
            <br>
            <v-btn @click="register" class="cyan">Register</v-btn>
           </div>
        </div>
      </v-flex>
    </v-layout>
   
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try{
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
      })
      } catch(error){
        this.error = error.response.data.error;
        
      }
      
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red
}
</style>
