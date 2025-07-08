<template>
  <div class="home-box">
    <el-container>
      <el-aside width="200px">
        <el-menu :router="true">
          <el-submenu
            v-for="(item, index) in $router.options.routes"
            :key="index"
            :index="index + ''"
            v-if="item.meta && item.children"
          >
            <template slot="title">
              <i class="el-icon-message"></i>{{ item.meta.title }}</template
            >
            <el-menu-item
              v-for="(item2, index2) in item.children"
              :key="index2"
              :index="item2.path"
              :class="$route.path == item2.path ? 'is-active' : ''"
              >{{ item2.meta.title }}</el-menu-item
            >
          </el-submenu>
          <el-menu-item
            v-for="(item, index) in $router.options.routes"
            :key="index"
            :index="item.path"
            v-if="item.meta && !item.children"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
import HomeMenu from '@/components/home/menu.vue'
export default {
  name: 'Home',
  components: {
    'home-menu': HomeMenu
  }
}
</script>

<style lang="less" scoped>
.home-box {
  width: 100%;
  height: 100%;

  .el-container {
    width: 100%;
    height: 100%;

    .el-header {
      background-color: aqua;
    }
  }
}
</style>
