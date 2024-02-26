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
        <div class="py-4">
          <CorrectorsList :correctors="correctors" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CorrectorsList from '../CorrectorsList.vue';
import { correctors } from '../../data/data';

</script>
