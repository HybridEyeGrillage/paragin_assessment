<template>
  <div class="grid grid-cols-1 items-center w-full gap-5">
    <template v-for="corrector in correctors" :key="corrector.id">
      <CorrectorRow v-bind="corrector" @selected="$emit('selected', corrector)" />
    </template>
  </div>
</template>

<script setup lang="ts">
import CorrectorRow from './CorrectorRow.vue';
import type { Corrector } from '../data/data';

interface Correctors {
  correctors: Corrector[];
}

defineProps<Correctors>();
</script>
