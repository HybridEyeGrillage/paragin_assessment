<script setup lang="ts">
import { ref } from 'vue';
import LayoutContainer from './layouts/LayoutContainer.vue';
import SettingContainer from './components/SettingContainer.vue';
import CorrectionDistributionList from './components/CorrectionRound/CorrectionDistributionList.vue';
import ToggleSwitch from './components/ToggleSwitch.vue';
import Notification from './components/Notification.vue';
import { settings } from './data/data';
import CorrectionRoundSettings from './components/CorrectionRound/CorrectionRoundSettings.vue';


// TODO: move to a composable that can set the notification type/message from any location
const notificationText = "Please select a corrector From the list below in order to assign your correction distribution.";
const correctorAssignment = ref('other');
const correctorAssignmentOptions: { text: string, value: string; }[] = [{ text: 'One corrector', value: 'other' }, { text: 'Assign to me', value: 'self' }];
</script>

<template>
  <LayoutContainer>
    <template #heading>
      <div class="flex justify-between bg-green-700 p-2 items-center">
        <span class="text-white text-md justify-center">Add new correction round</span>
        <span class="bg-red-700 px-4 flex w-6 items-center justify-center text-white font-bold">x</span>
      </div>
    </template>
    <div class="flex flex-col gap-3 w-full h-full px-3">
      <SettingContainer>
        <template #header>Correction round settings</template>
        <CorrectionRoundSettings :settings="settings" />
      </SettingContainer>
      <SettingContainer>
        <template #header>Correction distribution</template>
        <div class="flex flex-col gap-4">
          <span class="text-sm">Corrections should be assigned to:</span>
          <ToggleSwitch name="correctorAssignment" :options="correctorAssignmentOptions" v-model="correctorAssignment"
            :value="correctorAssignment" />
        </div>
        <div class="py-2">
          <Notification type="warning">
            {{ notificationText }}
          </Notification>
        </div>
        <CorrectionDistributionList />
      </SettingContainer>
    </div>
  </LayoutContainer>
</template>