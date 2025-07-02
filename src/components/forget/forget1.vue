<template>
  <!-- 步骤1的表单 -->
  <el-form :model="form1" :rules="rules" ref="form1" label-width="60px">
    <el-form-item label="手机" prop="iphone">
      <el-input v-model="form1.iphone"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <el-input v-model.number="form1.code"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Forget1',
  data() {
    return {
      form1: {
        iphone: '',
        code: ''
      },
      rules: {
        iphone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '请输入正确的手机号',
            trigger: 'blur'
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
