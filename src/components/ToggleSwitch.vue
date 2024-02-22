<script setup>

const props = defineProps({
  id: {
    type: String,
    default: 'toggle-switch',
  },
  options: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);
const toggleSwitch = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>

<template>
  <div class="flex rounded-full bg-gray-300 w-full justify-between">
    <button class="w-1/2" :class="{ 'rounded-full bg-blue-400 text-white p-3': !modelValue }"
      @click.prevent="toggleSwitch()">{{
        options[0] }}</button>
    <button class="w-1/2" :class="{ 'rounded-full bg-blue-400 text-white p-3': modelValue }"
      @click.prevent="toggleSwitch()">{{
        options[1] }}</button>
  </div>
</template>
