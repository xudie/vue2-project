<template>
  <!-- 步骤2的表单 -->
  <el-form :model="form2" :rules="rules" ref="form2" label-width="120px">
    <el-form-item label="密码" prop="password">
      <el-input v-model="form2.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmPassword">
      <el-input
        v-model="form2.confirmPassword"
        type="password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Forget2',
  data() {
    // confirmPassword 使用自定义验证规则
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form2.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form2: {
        password: '',
        confirmPassword: ''
      },
      rules: {
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        confirmPassword: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
