<template>
  <div class="base-cardbox">
    <div class="base-cardtitle">
      <slot name="header">迷人标题</slot>
    </div>

    <div class="base-cardcontent">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss">
.base-cardbox {
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 1em #888888;
  background: white;
  border: 1px solid #eee;
}

.base-cardtitle {
  color: red;
  border-bottom: 1px solid #eee;
  padding: 10px;
}

.base-cardcontent {
  padding: 20px;
}
</style>
