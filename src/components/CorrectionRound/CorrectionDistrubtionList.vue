<template>
  <div class="bg-green-300 bg-opacity-10 p-3">
    <div class="flex flex-col gap-3 rounded-sm border border-gray-400 p-4 bg-white">
      <span>All correctors</span>
      <div class="w-full h-0 border border-gray-600">&nbsp;</div>
      <div class="grid py-2">
        <div class="grid grid-cols-4">
          <span class="font-bold text-sm">Name</span>
          <span class="font-bold text-sm">Role</span>
          <span class="font-bold text-sm">Group</span>
        </div>
        <div class="flex flex-col gap-4">
          <!-- Turn into a component so that it is reusable and reactive to the selected corrector -->
          <div class="grid grid-cols-4 items-center">
            <span class="text-sm">Van den Endelagen, C</span>
            <span class="text-sm">Test Coordinator</span>
            <span class="text-sm">Paragin Medewekers Group XAAS</span>
            <button v-if="!isCorrecterSelected"
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
          <div class="grid grid-cols-4 items-center">
            <span class="text-sm">Van den Endelagen, C</span>
            <span class="text-sm">Test Coordinator</span>
            <span class="text-sm">Paragin Medewekers Group XAAS</span>
            <button v-if="!isCorrecterSelected"
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
          <div class="grid grid-cols-4 items-center">
            <span class="text-sm">Van den Endelagen, C</span>
            <span class="text-sm">Test Coordinator</span>
            <span class="text-sm">Paragin Medewekers Group XAAS</span>
            <button v-if="!isCorrecterSelected"
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isCorrecterSelected = ref(false);

const toggleSelectedCorrector = () => {
  isCorrecterSelected.value = !isCorrecterSelected.value;
};
</script>
