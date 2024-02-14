<template>
  <div class="flex items-center justify-between">
    <div class="text-sm">{{ label }}</div>
    <div v-for="(option, index) in options" :key="index" class="flex">
      <label class="flex items-center p-2 cursor-pointer w-10">
        <input type="radio" :name="name" :value="value" :checked="modelValue === value"
          @input="$emit('update:modelValue', value)" />
        <span class="text-sm px-2">
          {{ option }}
        </span>
      </label>
    </div>
  </div>
</template>

<script setup>
import Radio from './Radio.vue';
defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Boolean],
    required: true
  }
});
defineEmits(['update:modelValue']);
</script>
