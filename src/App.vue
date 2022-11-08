<template>
  <main class="h-screen w-full flex items-center justify-center">


    <div class="flex items-center justify-center pt-10 pb-10 flex-col font-poppins shadow-lg h-2/3 w-2/3">
      <p class="w-1/2 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam praesentium aliquid officiis!</p>
      <button class="bg-violet-400 text-white p-2 rounded-md" @click="fetchUser">Get started</button>
    </div>


   
    <div class="flex items-center justify-center pt-10 pb-10 flex-col font-poppins shadow-lg h-2/3 w-2/3">
      <img class="rounded-full border-violet-400 border-4" :src="this.user.image">
      <div class="userName text-md pt-4 pb-4">{{ this.user.firstName }} {{ this.user.lastName }}</div>

      <font-icons></font-icons>

      <button class="bg-violet-400 text-white p-2 rounded-md" @click="fetchUser">Next</button>

      
      
      
    </div>
   

  </main>
</template>

<script>

import '@/assets/tailwind.css'
import FontIcons from '@/components/FontIcons.vue'



export default {
  name: 'App',
  components: {
    FontIcons
  },
  data() {
    return {
      user: {
        firstName: this.firstName,
        lastName: this.lastName,
        image: this.image,
        phone: this.phone,
      },

    }
  },
  methods: {
    fetchUser() {
   
        fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => this.getUser(data));

    },

    getUser(results) {

      this.user = results;
      this.user.firstName = results.results[0].name.first;
      this.user.lastName = results.results[0].name.last;
      this.user.image = results.results[0].picture.large;
      this.user.phone = results.results[0].phone;

      return this.user;
    }

  },


};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

</style>
