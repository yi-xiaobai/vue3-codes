<template>
  <div class="page">
    <h2>默认插槽</h2>
    <button>
      <slot :username="username" :age="18"></slot>
    </button>

    <br />
    <br />
    <hr />
    <h2>具名插槽</h2>
    <div>
      <slot name="header" sex="男"></slot>
      <slot name="footer" address="湖北省武汉市"></slot>
    </div>

    <div>
      <slot name="list" v-bind="user" :uname="username"></slot>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const username = ref("章三");

const user = reactive({
  username: "11",
  age: 19,
});
</script>

<style lang="scss">
.page {
}
</style>
