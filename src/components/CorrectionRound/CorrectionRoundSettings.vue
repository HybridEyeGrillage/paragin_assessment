<template>
  <div v-for="setting in settings" :key="setting.id">
    <RadioGroup :label="setting.label" :options="setting.options" :name="setting.name" v-model="setting.value"
      :value="setting.value" />
  </div>
</template>

<script setup>
import RadioGroup from '../RadioGroup.vue';

defineProps({
  settings: {
    type: Array,
    required: true
  }
});
</script>
