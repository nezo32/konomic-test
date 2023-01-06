<template>
  <div>
    <VBtn @click="test()">Беброчка</VBtn>
    {{ some }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getStockGlass } from "@/core/plugins/stockGlass";

const some = ref();

async function test() {
  some.value = await getStockGlass("ETHBTC");
}
</script>

<style scoped lang="scss"></style>
