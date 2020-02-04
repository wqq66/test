<template>
  <div class="register">
    <!-- <h2 class="title">Register</h2> -->
    <div class="prompt-box">
      <p class="title">Register</p>
      <p class="prompt">{{ statePrompt }}</p>
    </div>
    <Form :statePrompt="statePrompt" action class="register-content" id="box">
      <input
        type="text"
        id="username"
        v-model="userInfo.username"
        name="username"
        placeholder="请输入账号..."
        @blur="checkname()"
      />
      <span class="warn">{{ warn.username }}</span>
      <input
        type="tel"
        id="tel"
        v-model="userInfo.tel"
        name="tel"
        placeholder="请输入手机号..."
        @blur="checktel()"
      />
      <span class="warn">{{ warn.tel }}</span>

      <input
        type="text"
        id="email"
        v-model="userInfo.email"
        name="email"
        placeholder="请输入邮箱..."
        @blur="checkemail()"
      />
      <span class="warn">{{ warn.email }}</span>

      <input
        type="password"
        id="password"
        v-model="userInfo.password"
        name="password"
        placeholder="请输入密码..."
        @blur="checkpassword()"
      />
      <span class="warn">{{ warn.password }}</span>

      <input
        type="password"
        id="rePassword"
        v-model="userInfo.rePassword"
        name="isPassword"
        placeholder="再次输入密码确认..."
        @blur="checkrePassword()"
      />
      <span class="warn">{{ warn.rePassword }}</span>

      <button
        type="button"
        value="sign in"
        id="btn"
        @click="flag"
        name="submit"
      >
        sign in
      </button>
      <!-- <a href="login.html"></a> -->
      <!-- <a href="/"></a> -->
      <div class="login">
        <!-- <a href="/Login">已有帐号,请登录</a> -->
        <router-link to="/">已有帐号,请登录</router-link>
      </div>
    </Form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      //     props: {
      //   statePrompt: {
      //     require: true,
      //     type: String
      //   }
      // },
      statePrompt: "Everything will be fine",
      isReturn: false,
      btn: false,
      warn: {
        username: "",
        password: "",
        rePassword: "",
        tel: "",
        email: ""
      },
      userInfo: {
        username: "",
        tel: "",
        email: "",
        password: "",
        rePassword: ""
      },
      userArr: []
    };
  },
  components: {
    // PromptBox
  },
  methods: {
    flag() {
      let n = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      let m = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      let a = /^[a-z]+$/; //小写字母组成
      let p = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
      let data = {
        username: "",
        password: "",
        tel: "",
        email: "",
        rePassword: ""
        // statePrompt: ""
      };
      if (
        !this.userInfo.username ||
        !this.userInfo.password ||
        !this.userInfo.rePassword ||
        !this.userInfo.tel ||
        !this.userInfo.email ||
        this.isReturn == false
      ) {
        this.$Message.error("信息不完整！");
        this.statePrompt = "请确保信息的完整和正确！";
        //  alert("信息不完整！")
      } else {
        if (
          !a.test(this.userInfo.username) ||
          !n.test(this.userInfo.tel) ||
          !m.test(this.userInfo.email) ||
          !p.test(this.userInfo.password) ||
          this.userInfo.password !== this.userInfo.rePassword
        ) {
          this.statePrompt = "请确保信息的正确！";
        } else {
          this.statePrompt = "正在注册中...";
          axios({
            method: "post",
            url:
              "http://api.ywbang.top/user/register?username=" +
              this.userInfo.username +
              "&password=" +
              this.userInfo.password +
              "&email=" +
              this.userInfo.email +
              "&phone=" +
              this.userInfo.tel+
              "&rePassword=" +
              this.userInfo.rePassword,
            data: data
          })
            .then(response => {
              if (
                /*response.data.code>= 200 && response.data.code < 300*/
                response.data.msg == "ok"
              ) {
                this.statePrompt = "注册成功！";
                console.log(response.data);
                alert("注册成功");
                // let self = this;
                this.$router.push("/");
              } else {
                this.statePrompt = response.data.msg;
                console.log(response.data);
              }
            })
            .catch(error => {
              this.statePrompt = error;
              console.log(error);
            });
        }
      }
    },
    //用户名
    checkname() {
      this.warn.username = "";
      this.isReturn = true;
      let a = /^[a-z]+$/; //小写字母组成
      //   console.log(this.userInfo.username)
      if (!this.userInfo.username) {
        this.warn.username = "用户名不能为空";
      } else if (!a.test(this.userInfo.username)) {
        this.isReturn = true;
        this.warn.username = "由小写字母组成";
      }
    },
    //手机号
    checktel() {
      this.warn.tel = "";
      this.isReturn = true;
      let n = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if (!this.userInfo.tel) {
        this.warn.tel = "手机号不能为空";
        this.isReturn = true;
      } else if (!n.test(this.userInfo.tel)) {
        this.warn.tel = "手机号码格式不正确";
        this.isReturn = true;
      }
    },
    //邮箱
    checkemail() {
      this.warn.email = "";
      this.isReturn = true;
      // var m  = /^([a-zA-Z]|[0-9])(\W|\-)+@[a-zA-Z0-9]+\.([A-zA-Z{2,4}])$/;
      let m = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      if (!this.userInfo.email) {
        this.warn.email = "邮箱不能为空";
        this.isReturn = true;
      } else if (!m.test(this.userInfo.email)) {
        this.warn.email = "邮箱格式不正确";
        this.isReturn = true;
      }
    },
    //密码
    checkpassword() {
      this.warn.password = "";
      this.isReturn = true;
      let p = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
      if (!this.userInfo.password) {
        this.isReturn = true;
        this.warn.password = "密码不能为空";
      } else if (!p.test(this.userInfo.password)) {
        this.isReturn = true;
        this.warn.password = "密码必须由英文字母和数字组成！";
      }
    },
    //第二遍密码
    checkrePassword() {
      this.warn.rePassword = "";
      this.isReturn = true;
      // var p=/[a-zA-Z]\w[z0-9]/;
      if (this.userInfo.password != this.userInfo.rePassword) {
        this.isReturn = true;
        this.warn.rePassword = "两次密码不一致";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.register {
  width: 28%;
  height: 78%;
  background-color: #ebf0f1;
  margin: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}
.register::before {
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
  line-height: 60px;
  text-align: center;
  color: #096;
  font-size: 2em;
  margin-top: 15px;
  // margin-bottom: 10px;
  font-weight:bold;
}
.prompt {
  color: chocolate;
}
.register-content {
  height: 75%;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.login {
  width: 120px;
  height: 80px;
  font-size: 15px;
  margin: 15px 10px 5px auto;
}
.login a {
  color: #009966;
}
.register-content input {
  width: 80%;
  height: 20%;
  border: 1px solid #bbb;
  border-radius: 6px;
  text-indent: 1em;
  margin-top: 15px;
}
.warn {
  color: red;
}
button {
  margin: 15px;
  width: 270px;
  height: 80px;
  border-width: 0px;
  border-radius: 5px;
  background: #e2523a;
  cursor: pointer;
  outline: none;
  font-family: Microsoft YaHei;
  color: #ffffff;
  font-size: 17px;
  margin-top: 30px;
}
</style>
