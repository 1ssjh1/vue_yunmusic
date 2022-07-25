<template>
  <div>
    <div class="the_body">
      <div v-show="!show" class="to_bottom">
        <div>X</div>
        <div>照片墙</div>
        <div>RedRock</div>
        <div>年度报告</div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao"></use>
          </svg>
        </div>
      </div>
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item> <div class="infoUserTop"></div> </van-swipe-item>
        <van-swipe-item> <div class="infoUserTop1"></div> </van-swipe-item>
        <van-swipe-item> <div class="infoUserTop2"></div> </van-swipe-item>
      </van-swipe>

      <div v-if="show" ref="user" class="userMid">
        <UserMid> </UserMid>
      </div>
    </div>
  </div>
</template>
<script>
import UserMid from "@/components/user/UserMid.vue";
export default {
  name: "UserInfo",
  components: {
    UserMid,
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    change_opacity() {
      this.$refs.user.style.transform = "translateY(4rem)";
      this.$refs.user.style.opacity = "0";
      this.$refs.user.style.transition = "1.2s ease";
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
  },
  mounted() {
    // 绑定 全局转换函数
    this.$bus.$on("to_opacity", (data) => {
      this.change_opacity();
    });
    // 下拉消失函数

    // this.$refs.btn.style.transform = "translateX(5rem)";
  },
};
</script>
<style lang="less" scoped>
.infoUserTop {
  width: 100%;
  height: 4.2rem;
  background: url("@/assets/github.webp") no-repeat center top;
  background-size: 100% 100%;
}
.infoUserTop1 {
  width: 100%;
  height: 4.2rem;
  background: url("@/assets//redrock.webp") no-repeat center top;
  background-size: 100% 100%;
}
.infoUserTop2 {
  width: 100%;
  height: 4.2rem;
  background: url("@/assets/B47E4CA1C3C88CAA4205D7BDA115BE22.jpg") no-repeat
    center top;
  background-size: 100% 100%;
}
// 下滑后顶部样式
.to_bottom {
  color: rgb(178, 185, 192);
  width: 90%;
  padding: 0.2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.userMid {
  margin-top: -0.1rem;
  background-color: rgb(255, 255, 255);
}
.the_body {
  width: 100%;
  height: 13.54rem;
  background: url("@/assets/B47E4CA1C3C88CAA4205D7BDA115BE22.jpg") no-repeat
    center center;
  background-size: 300% 300%;
}
</style>