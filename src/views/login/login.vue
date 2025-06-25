<template>
  <div class="login-layout">
    <el-container>
      <el-main>
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户登录" name="first">
            <login-main />
          </el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import LoginMain from '@/components/login/loginMain.vue'
export default {
  name: 'Login',
  components: {
    'login-main': LoginMain
  },
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style lang="less" scoped>
.login-layout {
  width: 100%;
  height: 100%;

  .el-container {
    height: 100%;

    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      // .el-tabs__nav-scroll {
      //   display: flex;
      //   align-items: center;
      //   justify-content: center;
      // }
    }
    .el-footer {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>
