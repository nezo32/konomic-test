<template>
  <VApp :theme="theme">
    <VAppBar>
      <VContainer class="d-flex flex-row justify-space-between">
        <div>
          <VBtn prepend-icon="" @click="$router.push('/')">Stock Glass</VBtn>
          <VBtn prepend-icon="" @click="$router.push('/list')">List</VBtn>
        </div>

        <VBtn
          :prepend-icon="
            theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
          "
          @click="changeTheme()"
        >
          {{ theme }}
        </VBtn>
      </VContainer>
    </VAppBar>

    <VMain>
      <VContainer>
        <RouterView />
      </VContainer>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import { ref } from "vue";

const theme = ref("dark");

function changeTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>

<style scoped lang="scss"></style>
