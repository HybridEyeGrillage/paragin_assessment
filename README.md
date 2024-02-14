# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


### Notes about the current status

- There are many points that would have to be fixed:
  - There's currently not saving of the current selected settings
  - Where marked, there should be a separate reusable component (left out for timing)
  - There's a layout issue in the with the radio section- would like to debug it, it's probably a silly CSS mistake.
  - Selecting the corrector will toggle all the correctors- this should have been a reusable component; I duplicated it for time and layout purposes
  - I left out some minor CSS tweaks like the alternating row colors.
  - Preferably, this information would be retrieved with a store (like Pinia) or even a basic composable coupled with an API calls with Apollo GraphQL. This would be a good way to organize and centralize the point of data where the Frontend can reliably obtain data.
  - Although it would be handy as well, I skipped over implementing Typescript. But that's a choice to make depending on familiarity. One could also just use typed JSDocs in their components. 😁