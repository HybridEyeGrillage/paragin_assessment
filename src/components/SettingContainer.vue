<template>
  <div class="flex flex-col p-5 border border-gray-200 bg-gray-100 gap-4 w-full">
    <span class="text-md">
      <slot name="header" />
    </span>
    <section clas="flex flex-col gap-4">
      <slot />
    </section>
  </div>
</template>

<script setup>

</script>
