<template>


  <nav
    class="flex items-center font-poppins bg-gradient-to-b from-violet-200 to-gray-100 flex-end text-sm w-full font-extrabold align-center">
    <div class="flex items-center text-blue-800 h-32 w-full space-x-10">
      
      <span class="text-lg pr-28 pl-10 flex flex-row align-center"> 
      
    LoremForReal</span>

    <!-- <img class="h-24 w-24" src="@/assets/logga.png"> -->


      <button
      class="py-2 px-2 text-xs hover:text-violet-400 hover:underline" @click="toggleGetUser">
        Get random user
    </button>


      <button
        class="text-blue-800 text-xs py-2.5 px-2.5 hover:text-violet-400 hover:underline">
        News
    </button>

      <button
        class="text-blue-800 text-xs py-2.5 px-2.5 hover:text-violet-400 hover:underline">
        About
  </button>

  <button
        class="text-blue-800 text-xs py-2.5 px-2.5 hover:text-violet-400 hover:underline">
        Contact us
  </button>


      <div class="pl-6 pr-4">
        <button class="w-20 h-20
          dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img class="border-4 rounded-full border-violet-400" src="@/assets/woman.jpg">
        </button>

       
          <ul class="
          dropdown-menu
          rounded
          shadow-lg
          hidden
          text-gray-700
          bg-white" aria-labelledby="dropdownMenuButton1">
          <li class="pl-2 pt-2">
            <font-awesome-icon :icon="['fas', 'user']" />
            <a class="
              dropdown-item
              text-sm
              py-2
              px-4
              w-full
              font-normal
            " href="#">My profile</a>
          </li>

          <li class="pl-2 pt-2">
            <font-awesome-icon :icon="['fas', 'heart-pulse']" />
            <a class="
              min-w-max
              dropdown-item
              text-sm
              py-2
              px-4
              w-full
              font-normal
            " href="#">Matches</a>
          </li>


          <li class="pl-2 pt-2">
            <font-awesome-icon :icon="['fas', 'image']" />
            <a class="
              dropdown-item
              text-sm
              py-2
              px-4
              w-full
              font-normal
            " href="#">My photos</a>
          </li>

          <li class="pl-2 pt-2">
            <font-awesome-icon :icon="['fas', 'gear']" />
            <a class="
              dropdown-item
              text-sm
              py-2
              px-4
              w-full
              font-normal
            " href="#">Settings</a>
          </li>


          <li class="pl-2 pt-2 pb-2">
            <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
            <a class="
              dropdown-item
              text-sm
              py-2
              px-4
              w-full
              font-normal
            " href="#">Sign out</a>
          </li>

          </ul>





      </div>
    </div>
  </nav>




</template>


<script>
export default {

  data() {
    return {

      isLiked: this.isLiked,
      isGetNews: false,
      
    }

  },
 methods:{
  toggleGetUser(){
   this.$emit('startGame');
  },

 }

}
</script>