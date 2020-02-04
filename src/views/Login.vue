<template>
  <div class="login">
    <h2 class="title">Login</h2>
    <Form
      ref="formInline"
      :model="formInline"
      :rules="ruleInline"
      inline
      class="login-content"
    >
      <FormItem prop="user">
        <i-input
          type="text"
          v-model="formInline.user"
          id="username"
          placeholder="username"
        >
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </i-input>
      </FormItem>
      <FormItem prop="password">
        <i-input
          type="password"
          v-model="formInline.password"
          id="password"
          placeholder="password"
        >
          <Icon type="ios-lock-outline" slot="prepend"></Icon
        ></i-input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="addUser('formInline')">Sign in</Button>
      </FormItem>
      <div class="footer">
        <a class="register" @click="goto">注册</a>
        <!-- <router-link to="/Register">注册</router-link> -->
        <a class="forget" href="/">忘记密码</a>
      </div>
    </Form>
  </div>
</template>

<script>
// // @ is an alias to /src
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入用户名...",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码...",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码不能低于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    goto() {
      this.$router.push("/Register");
    },
    addUser(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.axios();
          let data = {
            username: "",
            password: ""
          };
          // let self = this;
          axios({
            method: "post",
            url:
              "http://api.ywbang.top/user/login?username=" +
              this.formInline.user +
              "&password=" +
              this.formInline.password,
            data: data
          })
            .then(response => {
              if (/*response.data.code >= 200 && response.data.code < 300*/
              response.data.data.token != null) {
                console.log(response.data);
                alert("登录成功");
              this.usertoken = response.data.data.token;
              this.$store.commit("setToken", this.usertoken);
              localStorage.setItem("token", this.usertoken);
              console.log(this.$store);
                this.$router.push({ path: "/carousel" });
              } else {
                console.log(response.message);
                alert("登录失败");
              }
            })
            .catch(error => {
              this.statePrompt = error;
              // console.log(error);
            });
        } else {
          this.$Message.error("Fail");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  flex-direction: column;
  width: 28%;
  height: 60%;
  background-color: #ebf0f1;
  margin: auto;
  border-radius: 8px;
  text-align: center;
}
/*.login_head{width: 100%;height: 10px;background-color: red;border-radius: 6px 6px 0 0;}*/
.login:before {
  content: "";
  display: block;
  width: 100%;
  height: 10px;
  background-image: -webkit-linear-gradient(
    left,
    #e2523a 0%,
    #e2523a 20%,
    #fc6c6d 20%,
    #fc6c6d 40%,
    #fc9d9a 40%,
    #fc9d9a 60%,
    #fe4365 60%,
    #fe4365 80%,
    #3fb8af 80%,
    #3fb8af 100%
  );
  border-radius: 6px 6px 0 0;
}
.title {
  line-height: 80px;
  text-align: center;
  color: #096;
  font-size: 2em;
}
.login-content {
  height: 70%;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.register {
  color: #009966;
  font-size: 15px;
  margin-right: auto;
}
.forget {
  color: #009966;
  margin-left: 20px;
}
.login-content FormItem {
  width: 80%;
  height: 20%;
  margin-top: 15px;
  border: 1px solid #bbb;
  border-radius: 6px;
  outline: none;
  text-indent: 1em;
}
#username {
  margin-top: 20px;
}
button {
  margin: 15px;
  width: 180px;
  height: 40px;
  border-width: 0px;
  border-radius: 5px;
  background: #e2523a;
  cursor: pointer;
  outline: none;
  font-family: Microsoft YaHei;
  color: #ffffff;
  font-size: 17px;
  margin-top: 10px;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.footer a {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 15px;
  margin-bottom: 8px;
  cursor: pointer;
}
</style>
