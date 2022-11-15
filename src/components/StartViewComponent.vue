<template>

    <div class="flex items-center justify-center flex-col pt-2"
        v-show="isStarting">
        <img class="h-[60%] w-[60%]" src="@/assets/startpic.jpg">

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