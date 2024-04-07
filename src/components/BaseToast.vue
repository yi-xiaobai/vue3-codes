<template>
  <div class="toast-wrap">{{ message }}</div>
</template>

<script setup>
import { ref } from "vue";
const a = ref(0);
const props = defineProps({
  message: String,
  duration: {
    type: Number,
    default: 2000,
  },
});
</script>

<style lang="scss">
.toast-wrap {
  background-color: #000;
  padding: 8px 15px;
  font-size: 14px;
  color: #fff;
  text-align: left;
  position: fixed;
  z-index: 99;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  max-width: 80vw;
}
</style>
