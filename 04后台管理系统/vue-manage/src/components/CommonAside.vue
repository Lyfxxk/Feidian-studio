<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <h3>{{ isCollapse ? "HZAU" : "信息管理与信息系统" }}</h3>
    <el-menu-item @click="clickmenu(item)" v-for="item in nochildren" :index="item.path" :key="item.path">
      <i :class="'el-icon' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu v-for="item in haschildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i class="'el-icon'+item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="(subitem, subindex) in item.children" :key="subitem.path">
        <el-menu-item :index="subindex">{{ subitem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100%;
  border: none;

  h3 {
    color:black;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickmenu(item) {
      this.$router.push({
        name: item.name,
      });
    },
  },
  computed: {
    nochildren() {
      return this.menu.filter((item) => !item.children);
    },
    haschildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>