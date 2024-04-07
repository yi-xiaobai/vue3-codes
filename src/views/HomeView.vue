<script setup>
import { getCurrentInstance } from "vue";
// const { proxy } = getCurrentInstance();
const ctx = getCurrentInstance().appContext.config.globalProperties;

const handleClickShowToast = () => {
  ctx.$toast({ message: "你好你撒佛得角送份骄傲数据佛啊数据佛撒娇发动机扫到放假哦撒娇佛撒娇佛啊就哦份骄傲舒服多了撒开发接口沙拉酱", duration: 30000 });
  // proxy.$toast()
};
</script>

<template>
  <main>
    <h1>111</h1>
    <button @click="handleClickShowToast">显示toast</button>
  </main>
</template>
