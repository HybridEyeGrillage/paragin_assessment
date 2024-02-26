<template>
  <label class="flex items-center p-2 cursor-pointer w-10" :class="{ 'pointer-events-none opacity-5': disabled }">
    <input v-bind="$attrs" type="radio" :name="name" :value="value" :disabled="disabled" :checked="modelValue === value"
      @input="$emit('update', modelValue = value)" />
    <span class="text-sm px-2"
      :class="{ 'pointer-events-none opacity-5 shadow-[0_35px_60px_-15px_rgba(20,123,16,0.3)]': disabled }">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
interface RadioProps {
  disabled?: boolean;
  value: string | boolean;
  name: string;
}
defineProps<RadioProps>();
defineOptions({ inheritAttrs: false });
const modelValue = defineModel<string | boolean>({ required: true });
defineEmits<{ update: [modelValue: string | boolean]; }>();
</script>
