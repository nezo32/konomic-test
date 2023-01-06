import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventStore = defineStore('eventBus', () => {
  const events = ref<Map<string, Function>>(new Map());
  function pub(event: string, func: Function) {
    events.value.set(event, func);
  }
  function sub(event: string) {
    return events.value.get(event);
  }

  return { events, pub, sub }
})
