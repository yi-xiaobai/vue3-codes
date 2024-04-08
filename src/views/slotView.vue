<template>
  <div class="page">
    <base-button>
      <template #default="slotDefault">你好----{{ slotDefault }}</template>
      <template #header="slotHeader">
        <div>头部内容---{{ slotHeader }}</div>
      </template>
      <template #footer="slotFooter">
        <div>底部内容---{{ slotFooter }}</div>
      </template>
    </base-button>

    <hr />
    <br />
    <br />
    <br />
    <base-button v-slot="slotScope">
      {{ slotScope }}
    </base-button>

    <hr />
    <br />
    <br />
    <br />

    <base-button>
      <template #list="slotList">
        {{ slotList }}
      </template>
    </base-button>

    <hr />
    <br />
    <br />
    <br />

    <base-card>
      <template #header>标题</template>
      <div>1231232131</div>
    </base-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss"></style>
