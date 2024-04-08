<template>
  <div class="page">
    <h2>组合式api学习</h2>
    <div>
      {{ ageRef }}
    </div>
    <div>
      {{ stateToRefs }}
    </div>

    <button @click="handleClickAge">增加</button>
  </div>
</template>

<script setup>
import { reactive, toRef, toRefs } from "vue";

const user = reactive({
  name: "didi",
  age: 18,
});

// toRef 基于对象上的一个属性创建出来的一个ref
const ageRef = toRef(user, "age");
console.log("==>Get ageRef", ageRef);

// toRefs
const state = reactive({
  foo: 1,
  bar: 2,
});

const stateToRefs = toRefs(state);
console.log(state.foo, stateToRefs.foo.value);

const handleClickAge = () => {
  ageRef.value++;
  //   state.foo++;
  stateToRefs.foo.value++;
};
</script>

<style lang="scss"></style>
