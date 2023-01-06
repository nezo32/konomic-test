<template>
  <div>
    <VBtn @click="test()">Бобочка</VBtn>

    <VCardTitle>ETH</VCardTitle>

    <VTable>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataStorage" :key="item.u">
            <td>{{ item.a[0] }}</td>
            <td>{{ item.b[0] }}</td>
          </tr>
        </tbody>
      </template>
    </VTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { subStockGlass, getStockGlass } from "@/core/plugins/stockGlass";
import type { IWebSocketResponse } from "@/core/types/types";

const ws = await subStockGlass("ETHBTC");
const dataStorage = ref<Array<IWebSocketResponse>>([]);
const once = ref(true);

async function test() {
  const snapshot = await getStockGlass("ETHBTC");
  if (!ws) return;
  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data) as IWebSocketResponse;
    if (snapshot && data.u <= snapshot.lastUpdateId) return;
    if (once.value) {
      if (
        snapshot &&
        snapshot.lastUpdateId + 1 >= data.U &&
        snapshot.lastUpdateId + 1 <= data.u
      ) {
        dataStorage.value.push(data);
        once.value = false;
      }
    } else {
      if (data.U === dataStorage.value[dataStorage.value.length - 1].u + 1) {
        dataStorage.value.push(data);
      }
    }
  };
}
</script>

<style scoped lang="scss"></style>
