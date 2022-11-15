<template>

<div class="flex items-center justify-center pt-10 pb-10 flex-col font-poppins shadow-lg h-2/3 w-2/3 rounded-md"
v-show="isStarting">
<img class="h-24 w-24" src="@/assets/startpic.jpg">
<p class="text-2xl text-violet-400 font-extrabold p-4">Connecting people.</p>
</div>

</template>

<script>
export default {

  data() {
    return {

      isStarting: true,
    }

  },

}
</script>