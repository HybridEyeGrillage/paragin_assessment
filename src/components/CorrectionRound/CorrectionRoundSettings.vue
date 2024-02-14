<template>
  <div v-for="setting in  settings" :key="setting.id">
    <HorizontalRadioGroup :label="setting.label" :name="setting.name" :options="setting.options" v-model="value"
      :value="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HorizontalRadioGroup from '../HorizontalRadioGroup.vue';

defineProps({
  settings: {
    type: Array,
    required: true
  }
});
const value = ref(false);
</script>
