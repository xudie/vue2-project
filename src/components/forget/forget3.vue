<template>
  <!-- 步骤3的表单 -->
  <el-form :model="form3" :rules="rules" ref="form3" label-width="120px">
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form3.email"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Forget3',
  data() {
    return {
      form3: {
        email: ''
      },
      rules: {
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }]
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
