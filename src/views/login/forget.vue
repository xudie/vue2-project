<template>
  <div class="forget-box">
    <div class="forget-box-content">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <div class="step-content">
        <forget-1 ref="form1" v-show="active === 0" />
        <forget-2 ref="form2" v-show="active === 1" />
        <forget-3 ref="form3" v-show="active === 2" />
      </div>
      <div class="step-actions">
        <el-link type="primary" :underline="false" href="/login"
          >使用已有账号登录</el-link
        >
        <div class="step-actions-button">
          <el-button v-if="active > 0" @click="prev">上一步</el-button>
          <el-button v-if="active < 2" type="primary" @click="next"
            >下一步</el-button
          >
          <el-button v-if="active === 2" type="success" @click="submit"
            >提交</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Forget1 from '@/components/forget/forget1.vue'
import Forget2 from '@/components/forget/forget2.vue'
import Forget3 from '@/components/forget/forget3.vue'
export default {
  name: 'Forget',
  data() {
    return {
      active: 0
    }
  },
  components: {
    'forget-1': Forget1,
    'forget-2': Forget2,
    'forget-3': Forget3
  },
  methods: {
    next() {
      // 根据当前步骤验证对应的表单
      const formName = `form${this.active + 1}`
      console.log('表单验证-表单名称', formName)
      this.$refs[formName].$refs[formName].validate(valid => {
        if (valid) {
          console.log('忘记密码步骤验证', valid)
          this.active++
        } else {
          return false
        }
      })
    },
    prev() {
      this.active--
    },
    submit() {
      this.$refs.form3.$refs.form3.validate(valid => {
        if (valid) {
          // 所有表单验证通过，可以提交数据
          // 2. 收集所有步骤的表单数据
          const formData = {
            ...this.$refs.form1.form1, // 获取步骤1的数据
            ...this.$refs.form2.form2, // 获取步骤2的数据
            ...this.$refs.form3.form3 // 获取步骤3的数据
          }
          console.log('提交的数据:', formData)
          this.$message.success('提交成功！')

          // 这里可以添加实际的提交逻辑
          // this.$axios.post('/api/submit', formData).then(response => {
          //   // 处理响应
          // })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less">
.forget-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .forget-box-content {
    width: 350px;

    .step-content {
      margin-top: 20px;
    }

    .step-actions {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
