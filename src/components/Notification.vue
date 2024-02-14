<template>
  <div class="flex gap-4 w-full p-2 bg-yellow-100 place-items-center border-yellow-400 border">
    <div class="w-6 h-6">
      <svg v-if="type === 'warning'" fill="#F9D860" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m15.83 13.23-7-11.76a1 1 0 0 0-1.66 0L.16 13.3c-.38.64-.07 1.7.68 1.7H15.2c.74 0 1.01-1.13.63-1.77Zm-7 .37H7.14v-1.71h1.7Zm0-3.57H7.16L7 4h2Z" />
      </svg>
    </div>
    <span class="text-sm">
      <slot />
    </span>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true
  }
});
</script>
