<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: { CommonAside, CommonHeader },
};
</script>

<style scoped lang="less">
.el-header {
  background: #333;
}
.el-main {
  padding-top: 0;
}
</style>