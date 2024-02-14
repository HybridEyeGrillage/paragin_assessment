<template>
  <div class="border-x-8 border-b-8 border-green-700">
    <div>
      <slot name="heading"></slot>
    </div>
    <div class="py-4">
      <slot />
    </div>
    <div class="flex justify-between shadow-inner p-2">
      <button
        class="py-2 px-5 bg-transparent rounded-md text-green-700 border border-green-700 text-md font-bold">Cancel</button>
      <button class="py-2 px-5 bg-red-700 rounded-md flex gap-4 place-items-center">
        <svg class="w-6 h-6" fill="#FFFFFF" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m15.83 13.23-7-11.76a1 1 0 0 0-1.66 0L.16 13.3c-.38.64-.07 1.7.68 1.7H15.2c.74 0 1.01-1.13.63-1.77Zm-7 .37H7.14v-1.71h1.7Zm0-3.57H7.16L7 4h2Z" />
        </svg>
        <span class="text-white font-bold text-sm">Save this correction round</span>
      </button>
    </div>
  </div>
</template>

<script setup>

</script>
