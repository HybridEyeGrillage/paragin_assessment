<template>
  <label class="flex items-center p-2 cursor-pointer w-10">
    <input type="radio" :name="name" :value="value" :checked="modelValue === value"
      @input="$emit('update:modelValue', value)" />
    <span class="text-sm px-2">
      <slot />
    </span>
  </label>
</template>

<script setup>
defineProps({
  value: {
    type: [String, Boolean],
    required: true
  },
  name: {
    type: String,
  },
  modelValue: {
    type: [String, Boolean],
    required: true
  }
});
defineEmits(['update:modelValue']);
</script>
