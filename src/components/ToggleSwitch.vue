<template>
  <div class="flex rounded-full bg-gray-300 w-full justify-between">
    <template v-for="(option, index) in options" :key="index">
      <label
        class="w-1/2 rounded-full p-3 text-center cursor-pointer has-[:checked]:bg-blue-400 has-[:checked]:text-white">
        <input v-bind="$attrs" type="radio" class="w-0 h-0 opacity-0" :name="name" :value="option.value"
          :checked="modelValue === option.value" @input="$emit('update', modelValue = option.value)" />
        {{ option.text }}
      </label>
    </template>
  </div>
</template>

<script setup lang="ts">

interface ToggleSwitchProps {
  name: string;
  options: {
    text: string;
    value: string | boolean;
  }[];
  value: string | boolean;
}

defineProps<ToggleSwitchProps>();
defineOptions({ inheritAttrs: false });
const modelValue = defineModel<string | boolean>('value', { required: true });
defineEmits<{ update: [modelValue: string | boolean]; }>();
</script>
