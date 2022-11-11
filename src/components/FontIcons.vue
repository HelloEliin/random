<template>

  <div class="flex flex-row pt-4 pb-4">


    <button class="px-4 py-2 bg-blue-600 font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        " @click="toggleIsLiked"
        >
      <font-awesome-icon :icon="['fas', 'heart']" />
    </button>





    <div class="dropdown pl-4">
      <button class="
          dropdown-toggle
          px-4
          py-2
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <font-awesome-icon :icon="['fas', 'envelope']" />

      </button>
      <ul class="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        " aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            " href="#">elin.holmstrom@gmail.com</a>
        </li>
      </ul>
    </div>







  </div>

</template>

<script>
export default {

  data() {
    return {

      isLiked: this.isLiked,
    }

  },
  methods: {
    toggleIsLiked() {
      this.$emit('button-pressed');
    }
  },

}
</script>