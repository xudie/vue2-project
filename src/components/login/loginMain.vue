<template>
  <div class="login-main">
    <el-form
      :model="loginFormData"
      ref="loginFormData"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item
        prop="userName"
        label="用户名"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <el-input v-model="loginFormData.userName"></el-input>
      </el-form-item>
      <el-form-item
        prop="userPassword"
        label="密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <el-input v-model="loginFormData.userPassword"></el-input>
      </el-form-item>
      <el-form-item
        prop="code"
        label="验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      >
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="16">
            <el-input v-model="loginFormData.code"></el-input>
          </el-col>
          <el-col :span="6">
            <el-image src="">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item class="remember-forget">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <el-checkbox v-model="loginFormData.remember">记住我 </el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-link type="primary" :underline="false" href="/forget"
              >忘记密码
            </el-link>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item class="login-btn">
        <el-button type="primary" @click="submitForm('loginFormData')"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item class="login-register">
        <el-link type="primary" :underline="false" href="/register"
          >注册账号</el-link
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import http from '../../utils/http'
import authService from '../../services/auth'
export default {
  name: 'LoginMain',
  data() {
    return {
      loginFormData: {
        code: '',
        userName: '',
        userPassword: '',
        remember: false
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('submit', valid, this.loginFormData)
          authService.login(this.loginFormData)
          // 使用POST请求
          // http
          //   .post('/api/users', this.loginFormData)
          //   .then(data => console.log(data))
          //   .catch(error => console.error(error))
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-main {
  width: 400px;

  .login-btn {
    button {
      width: 100%;
    }
  }

  .login-register {
    text-align: right;
  }
}
</style>
