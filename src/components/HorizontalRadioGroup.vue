<template>
  <div class="flex items-center justify-between">
    <div class="text-sm">{{ label }}</div>
    <div class="flex gap-5">
      <div v-for="(option, index) in options" :key="index" class="flex">
        <Radio :option="options" :value="option" :name="name" :modelValue="modelValue">{{ option }}</Radio>
      </div>
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
