<script setup>
import { ref } from 'vue';
import LayoutContainer from './layouts/LayoutContainer.vue';
import SettingContainer from './components/SettingContainer.vue';
import HorizontalRadioGroup from './components/HorizontalRadioGroup.vue';
import CorrectionDistrubtionList from './components/CorrectionRound/CorrectionDistrubtionList.vue';
import ToggleSwitch from './components/ToggleSwitch.vue';
import Notification from './components/Notification.vue';

const settings = [
  {
    id: 1,
    name: 'anonymousCorrectionRound',
    label: "Anonymous correction round",
    options: ['No', 'Yes']
  },
  {
    id: 2,
    name: 'showPreviousRoundScoreAndFeedback',
    label: "Show scores and feedback from previous correction rounds",
    options: ['No', 'Yes']
  },
  {
    id: 3,
    name: 'requirePreviousRoundsToBeCompleted',
    label: "Previous correction rounds must be completed before this one can start",
    options: ['No', 'Yes']
  },
];

const correctorType = ref(false);

// Better to move to a composable that can set the notification type/message from any location
const notificationText = "Please select a corrector From the list below in order to assign your correction distibution."

</script>

<template>
  <!-- Correction Round Container -->
  <LayoutContainer>
    <template #heading>
      <div class="flex justify-between bg-green-700 p-2 items-center">
        <span class="text-white text-md justify-center">Add new correction round</span>
        <span class="bg-red-700 px-4 flex w-6 items-center justify-center text-white font-bold">x</span>
      </div>
    </template>
    <div class="flex flex-col gap-3 w-full h-full px-3">
      <!-- Correction Round settings -->
      <SettingContainer>
        <template #header>Correction round settings</template>
        <div v-for="setting in  settings" :key="setting.id">
          <HorizontalRadioGroup :label="setting.label" :name="setting.name" :options="setting.options" v-model="value"
            :value="value" />
        </div>
      </SettingContainer>
      <!-- Correction distribution -->
      <SettingContainer>
        <template #header>Correction distribution</template>
        <!-- Toggle -->
        <div class="flex flex-col gap-4">
          <span class="text-sm">Corrections should be assigned to:</span>
          <ToggleSwitch :options="['One corrector', 'Assign to me']" v-model="correctorType" />
        </div>
        <div class="py-2">
          <Notification type="warning">
            {{ notificationText }}
          </Notification>
        </div>
        <CorrectionDistrubtionList />

      </SettingContainer>
    </div>
  </LayoutContainer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
