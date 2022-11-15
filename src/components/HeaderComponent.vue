<template>


  <nav
    class="flex items-center flex-end bg-gradient-to-r from-pink-400 to-orange-300 shadow-md text-sm border-violet-400 w-full font-extrabold align-center">
    <div class="flex items-center text-white h-32 w-full space-x-16">
      <span class="font-semibold font-poppins text-5xl pl-10">Tinder</span>

      <button
        class="text-white py-2.5 px-2.5 border rounded  border-white hover:text-teal-500 hover:bg-white">
        News
    </button>

      <button
        class="text-white py-2.5 px-2.5 border rounded  border-white hover:text-teal-500 hover:bg-white">
        About
  </button>

      <button
      class="py-2.5 px-2.5 border rounded text-white border-white hover:text-teal-500 hover:bg-white" @click="toggleGetUser">
        Get random user
    </button>


      <div class="pl-24 pr-4">
        <button class="w-20 h-20
          dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img class="border-4 rounded-full border-white" src="@/assets/woman.jpg">
        </button>

       
          <ul class="
          dropdown-menu
          rounded
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


          <li class="pl-2 pt-2">
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
      
    }

  },
 methods:{
  toggleGetUser(){
    this.$emit('startGame');
  }
 }

}
</script>