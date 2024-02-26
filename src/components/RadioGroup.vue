
<template>
  <div class="flex items-center justify-between">
    <div class="text-sm">{{ label }}</div>
    <div class="flex gap-5">
      <div v-for="(option, index) in options" :key="index" class="flex gap-2">
        <Radio :name="name" :disabled="disabled" :value="option.value" v-model="modelValue"
          @input="emit('update', modelValue = $event.target.value)">
          {{ option.text }}
        </Radio>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Radio from './Radio.vue';

export interface RadioGroup {
  disabled?: boolean;
  label?: string;
  name: string;
  options: {
    value: string | boolean;
    text: string;
  }[];
  value?: string | boolean;
}

withDefaults(defineProps<RadioGroup>(), {
  disabled: false,
});
const emit = defineEmits<{ update: [value: string | boolean]; }>();
const modelValue = defineModel<string | boolean>('value', { required: true });

</script>
