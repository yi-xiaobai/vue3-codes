<template>
  <div class="page">
    <h2>组合式api学习</h2>
    <div>{{ user }}</div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

// const phone = ref("180");

const user = reactive({
  username: "yyds",
  age: 20,
});

// 监听整个对象
watch(
  () => {
    return {
      ...user,
    };
  },
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
  //   { deep: true }
);
user.username = "111";

// 监听单个属性

// watch(
//   () => user.age,
//   (newVal, oldVal) => {
//     console.log(newVal, oldVal);
//   }
// );
// user.age = 18;
</script>

<style lang="scss">
.page {
}
</style>
