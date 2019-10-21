<template>
  <div class="login">
    <el-form size="medium" ref="form" :model="form" label-width="40px">
      <el-form-item label="账号">
        <el-input clearable v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input clearable type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="remember">7天内记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%;" type="primary" @click="onSubmit">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      remember: true
    };
  },
  mounted() {

    let name = Cookies.get("name");
    let password = Cookies.get("password");
    if (!!name && !!password) {
      this.form.username = name;
      this.form.password = password;
    }
  },
  created(){
    this.getRequest('/api/ts-verity/login/fromLogin').then(result=>{
      console.log(result)
    })
  },
  methods: {
    onSubmit() {
      let that = this;
      if (this.remember) {
        Cookies.set("name", this.form.username, { expires: 7 });
        Cookies.set("password", this.form.password, { expires: 7 });
      } else {
        Cookies.remove("name");
        Cookies.remove("password");
      }
      this.postRequest(
        "/api/ts-verity/login/login" ,
        this.form
      ).then(result => {
        if (result) {
          that.$router.push("/table/index");
        } else {
          that.$message.error({
            message: "用户名或密码错误"
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  background: #5b7fa7;
  height: 100%;
  width: 100%;
  & > .el-form {
    margin: 0 30% 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    .el-form-item {
      margin-bottom: 0;
      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
