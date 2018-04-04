<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
        <span @click="navigateTo({name: 'root'})" >TabTracker </span>    
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
    </v-toolbar-items>
  </v-toolbar>
</template>
 <script>
 export default {
   
 }
 </script>
 <style scoped>
 
 </style>
 