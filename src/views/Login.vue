<template>
  <div id="login-container">
    <el-form
      ref="formData"
      :model="formData"
      :rules="formRules"
    >
      <h1 class="title">欢迎登录</h1>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="formData.username"
          auto-complete="off"
          @change="formData.username=formData.username.replace(/\s+/g,'')"
          prefix-icon="icon iconfont icon-peoplefill"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :type="state?'text':'password'"
          v-model="formData.password"
          auto-complete="off"
          prefix-icon="icon iconfont icon-mima"
          placeholder="请输入密码"
        >
          <i
            slot="suffix"
            @click="showOrHide"
            style="cursor:pointer;"
            :class="state ? 'icon iconfont icon-yanjing_kai' : 'icon iconfont icon-yanjing_bi'"
          ></i>
        </el-input>
      </el-form-item>
      <el-form-item style="padding-top:20px">
        <el-button
          class="login-button"
          @click.native.prevent="handleLogin"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // 登录  校验
  data () {
    return {
      state: false,
      logining: false,
      formData: {
        username: 'admin',
        password: '123456'
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    showOrHide () {
      this.state = !this.state
    },
    handleLogin () {
      this.$refs.formData.validate(valid => {
        if (valid) {
          const that = this
          axios
            .get('http://localhost:7300/mock/5ee3182c322a3759ecb9f07b/mei/user')
            .then(response => {
              const userInfs = response.data
              let flag = false
              let userInf = {}
              for (const index in userInfs) {
                if (
                  userInfs[index].username === that.formData.username &&
                  userInfs[index].password === that.formData.password
                ) {
                  flag = true
                  userInf = userInfs[index]
                }
              }
              if (!flag) {
                this.$message({
                  message: '用户名或密码错误，请检查重试',
                  type: 'error'
                })
              } else {
                sessionStorage.setItem('userInf', JSON.stringify(userInf))
                this.$router.push({ path: '/automobileInfMng' })
              }
            })
            .catch(error => {
              that.$message({
                message: '网络错误，请稍后重试',
                type: 'error'
              })
              console.log(error)
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login-container {
  border-radius: 5px;
  background-clip: padding-box;
  margin: 25vh auto;
  width: 300px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    display: block;
    text-align: center;
    margin: 0px auto 40px auto;
    color: #505458;
    font-size: 30px;
  }
  .el-form-item {
    margin-bottom: 22px;
  }
  .login-button {
    width: 100%;
    background-color: #f6db63;
    border-color: #f6db63;
    color: #505458;
    font-size: 16px;
  }
  button {
    &:hover {
      background-color: #ffec8b;
      border-color: #ffec8b;
    }
    &:active {
      background-color: #f6db63;
      border-color: #f6db63;
    }
  }
}
</style>
