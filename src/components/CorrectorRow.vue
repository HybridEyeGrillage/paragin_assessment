<template>
  <div>
    <div class="grid grid-cols-4 w-full grid-rows-1 items-center">
      <span class="text-sm">{{ name }}</span>
      <span class="text-sm">{{ role }}</span>
      <span class="text-sm">
        {{ group.length > 1 ? `${group.length} Groups` : group[0] }}
      </span>
      <button v-if="!isSelected"
        class="py-2 px-5 bg-transparent rounded-md text-green-700 border border-green-700 text-sm font-bold max-w-42"
        @click.prevent="toggleSelectedCorrector">
        Select this corrector
      </button>
      <button v-else
        class="py-2 px-5 bg-transparent rounded-md text-red-700 border border-red-700 text-sm font-bold max-w-42"
        @click.prevent="toggleSelectedCorrector">
        Remove
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Corrector } from '../data/data';
defineProps<Corrector>();
const isSelected = ref(false);

const emit = defineEmits<{ selected: [modelValue: string | boolean]; }>();
const toggleSelectedCorrector = () => {
  isSelected.value = !isSelected.value;
};
</script>
