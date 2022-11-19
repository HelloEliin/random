<template>
    <div>
        <div class="flex flex-start align-center flex-col font-poppins pl-16 absolute z-30 pt-48">
            <p class="text-4xl text-blue-800 font-semibold w-56">Meet the chosen one</p>
            <p class="text-xs text-gray-400 pb-6 pt-2">Lorem ipsum dolor sit amet consectetur<br>adipisicing elit. Lorem
                is
                the shit for real.</p>
            <button class="text-2xl border p-2 pl-4 pr-4 bg-violet-400 text-white rounded-full w-32">Sign up</button>
        </div>


        <div class="flex items-center justify-center absolute z-10 pt-44">
            <img class="h-[60%] w-[60%]" src="@/assets/pict.png">
        </div>

        <div class="text-xs absolute z-10 pt-500 font-poppins text-blue-800 pl-620">
            <div class="shadow-md rounded-full w-full pt-2 pb-2 pl-6 pr-6"><font-awesome-icon class="pr-2" :icon="['fas', 'users']" />
            1.5M+ Users worldwide<br>
            <font-awesome-icon class="pr-2 pt-2" :icon="['fas', 'heart-pulse']" /> 15.000 matches everyday<br>
        </div>
    </div>


    </div>

</template>



<script>
export default {
    data() {
        return {
            isStarting: true,
        }
    },
    methods: {
        showInside() {
            this.$emit('showInside');
            this.isStarting = false;
        }
    },
}
</script>