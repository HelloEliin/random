<template>

  <div class="flex items-center font-poppins bg-gradient-to-b from-violet-200 to-gray-100 z-10 absolute text-sm w-full align-center">
    <div class="flex items-center text-blue-800 h-32 w-full space-x-16">
      <span class="text-lg pr-28 pl-10 flex flex-row align-center">

        LoremForReal</span>


      <button class="py-2 px-2 text-xs hover:text-violet-400 hover:underline" @click="toggleGetUser">
        Whats LoremForReal?
      </button>


      <button class="text-blue-800 text-xs py-2.5 px-2.5 hover:text-violet-400 hover:underline">
        About us
      </button>

      <div class="pl-20">
        <button class="text-sm border p-2 pl-4 pr-4 bg-violet-400 text-white rounded-full" @click="signIn">Sign in</button>
      </div>


    </div>
  </div>

</template>

<script>
export default {
  methods: {
        signIn() {
            this.$emit('signIn');
            this.isStarting = false;
            
            this.$emit('fetchRandom');
            console.log('work');
        },
    },
  }

</script>