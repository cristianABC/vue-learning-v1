<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
        <router-link to="root">
            <span>TabTracker </span>    
        </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>  
    </v-toolbar-items>
    <v-spacer></v-spacer> 
    <v-toolbar-items>
        <router-link to="register">
          <v-btn  flat dark>         
               Sign Up
          </v-btn>
        </router-link> 
        <router-link to="login">
          <v-btn  flat dark>         
              Login
          </v-btn>
        </router-link> 
    </v-toolbar-items>
  </v-toolbar>
</template>
 <script>
 export default {
   
 }
 </script>
 <style scoped>
 
 </style>
 