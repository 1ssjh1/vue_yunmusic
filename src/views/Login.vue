<template>
  <div>
    <div class="public">
      <div class="img"></div>
      <div class="login" id="login">
        <!-- <i class="iconfont">&#xe669;</i> -->
        <h2>登录</h2>
        <div>
          <h4>用户名</h4>
          <input type="text" class="name" />
        </div>
        <div>
          <h4>密码</h4>
          <input type="text" class="password" />
        </div>
        <label for="mag"> </label>
        <input type="button" value="登录" class="value" @click="goHome" />
        <p>还未注册？</p>
      </div>

      <!-- <div class="login" id="register">
        <i class="iconfont">&#xe70b;</i>
        <h2>注册</h2>
        <div>
          <h4>用户名</h4>
          <input type="text" class="name" />
        </div>
        <div>
          <h4>密码</h4>
          <input type="text" class="password" />
        </div>
        <div>
          <h4>昵称</h4>
          <input type="text" class="nickname" />
        </div>

        <input type="button" value="注册" class="value" />
        <p>已有账号？</p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    goHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style lang="less" scoped>
.img {
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 0.0633rem;
  top: 0.0633rem;
  z-index: 999;
  //   background: url("../image/img1.png") center center no-repeat;
  background-size: 100% 100%;
}

.public {
  width: 4.8rem;
  height: 5.4267rem;
  margin: 3rem auto;
  // overflow: hidden;
  position: relative;
}

.public .login {
  width: 100%;
  height: 100%;
  padding: 0.2333rem;
  box-shadow: 0 0.0233rem 0.12rem 0 rgb(0 0 0 / 10%);
  border: 0.0167rem solid #ebeef5;
  background-color: #fff;
  color: #303133;
  position: absolute;
}

.login {
  // transform: translateX(-101%);
  transition: 2s all;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  p {
    color: #3488ff;
  }
  p:hover {
    transform: scale(1.3);
    transition: 2s all;
  }
}

.login div {
  position: relative;
}

.login div input {
  margin-top: -0.2rem;
  background-color: #fff;
  border-radius: 0.0567rem;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  padding: 0 0.4rem;
  width: 100%;
  margin-top: 0.2rem;
  height: 0.6rem;
}

.login div h4 {
  font-weight: 400;
}

.login label {
  cursor: pointer;
}

.login label i {
  vertical-align: middle;
}

.iconfont {
  font-size: 0.6rem !important;
}

.login input[type="button"] {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  width: 0.9667rem;
  text-align: center;
  border-radius: 0.1667rem;
}

/* js */

.login_enter {
  transform: translateX(0px);
}
</style>