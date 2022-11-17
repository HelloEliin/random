<template>

<inside-header v-show="isStarting" @startGame="startGame" @getNews="getNews"></inside-header>
<front-page v-show="!isInside" @showInside="showInside"></front-page>
<front-page-header v-show="!isInside" @signIn="showInside"></front-page-header>

  <main class="h-screen w-full bg-white flex items-center justify-center">



    <div class="flex justify-center items-center pt-10 pb-10 flex-col font-poppins w-[80%] shadow-lg h-2/3 rounded-md bg-white"
        v-show="isActive"> <!--!isActive-->
      <img class="h-24 w-24" src="@/assets/chatBubble.jpeg">
      <p class="text-3xl text-blue-800 p-4">Lets Explore</p>
      <p class="w-1/2 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam praesentium
        aliquid officiis!</p>
      <button class="startBtn bg-violet-400 text-white p-2 rounded-md" @click="toggle">Get started</button>
    </div>




    <div class="flex items-center justify-center pt-10 pb-10 flex-col font-poppins shadow-lg h-[80%] w-full rounded-md"
      v-show="isGetUser">
      <img class="rounded-full" :src="this.user.image">
      <div class="userName text-lg pt-4 pb-2">{{ this.user.firstName }} {{ this.user.lastName }} , {{ this.user.age }}
      </div>




      <div class="flex flex-row text-blue-800 space-x-2">
        <font-awesome-icon :icon="['fas', 'location-dot']" />
        <div class="userName text-sm pb-2 text-gray-400">
          {{ this.user.state }}, {{ this.user.city }}
        </div>
      </div>

      <div class="flex flex-row text-blue-800 space-x-2">
        <font-awesome-icon :icon="['fas', 'briefcase']" />
        <p class="text-sm pb-2 text-gray-400">Nurse at Hamptons Hospital</p>
      </div>








      <p class="w-1/2">Lorem ipsum dolor sit amet consectetur. Dolorum earum soluta itaque sed aut.</p>
      <font-icons :class="this.isLiked ? 'text-red-400' : 'text-white'" @button-pressed="toggleIsLiked"></font-icons>
      <button class="bg-violet-400 text-white p-2 rounded-md" @click="fetchUser">Get the next user</button>

    </div>


  </main>
</template>

<script>

import '@/assets/tailwind.css'
import 'tw-elements'

import FontIcons from '@/components/FontIcons.vue'
import InsideHeader from '@/components/InsideHeader.vue'
import FrontPage from '@/components/FrontPage.vue'
import FrontPageHeader from '@/components/FrontPageHeader.vue'







export default {
  name: 'App',
  components: {
    FontIcons,
    FrontPageHeader,
    InsideHeader,
    FrontPage,
  },
  data() {
    return {

      isActive: false,
      isLiked: false,
      isStarting: false,
      isShowing: false,
      isGetNews: false,
      isGetUser: false,
      isInside: false,
    
      
    

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
      this.user.age = results.results[0].dob.age;
      this.user.state = results.results[0].location.state;
      this.user.city = results.results[0].location.city;
      this.isLiked = false;

      return this.user;
    },
    toggle() {

      this.isActive = !this.isActive;
      this.isGetUser =!this.isGetUser;
      this.fetchUser();
    },

    toggleIsLiked() {

      this.isLiked = !this.isLiked;

    },

    startGame() {

      this.isActive = true;
      this.isGetUser = false;
      console.log('hej')
    

    },

    toggleIsGetNews(){
    
      this.isGetNews = true;
      
    },

    showInside(){

      this.isActive = true;
      this.isStarting = true;
      this.isInside = true;


    },

  },


};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>
