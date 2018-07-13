<template>
  <div class="login">
    <el-form :model="loginForm" :rules="rulesLogin" ref="loginForm" label-position="left" label-width="0px">
      <h3 class="title">后台登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
      <!-- <el-button @click.native.prevent="handleReset2">重置</el-button> -->
    </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/javascript">

  export default {
    data (){
      return {
        logining: false,
        checked: true,
        loginForm: {
          username: 'Admin',
          password: '.........'
        },
        rulesLogin: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
      }
    },
    methods: {
      handleSubmit2(){
        this.logining = true;
        console.log('测试登录：\n账号：Qin \n密码：123456');
        if(this.loginForm.username === 'Qin' && this.loginForm.password === '123456'){
          
          setTimeout(() => {
            this.logining = false;
            this.$router.push({ path: '/home' });
          }, 1000)
        }else{
          this.$message({
            message: '用户名或密码不正确(看控制台打印)',
            type: 'error'
          });
          this.logining = false;
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  .login{
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 0 auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 15px #cac6c6;
    position:relative;
    top:180px;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
  
  
</style>