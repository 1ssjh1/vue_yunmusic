<template>
  <div class="shadow">
    <van-button type="primary" text="" @click="show = true" />

    <van-overlay :show="show" @click="show = !show" z-index="4" ref="overlay" />
    <!-- 侧边栏 -->
    <div ref="enters" class="enter">
      <LeftNav> </LeftNav>
    </div>
    <!-- 侧边栏 -->
    <div ref="body">
      <section ref="top_bar" class="top_bar">
        <!-- 顶部导航 -->
        <div class="left" ref="btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyoujiantou"></use>
          </svg>
        </div>
        <div v-show="top_show" class="mid">烟鬼丿</div>
        <div class="right">
          <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </div>
      </section>

      <!-- 滑动组件 -->

      <v-touch @swipedown="swiperDirection(1)" class="v-touch wrapper">
        <div class="UerMid">
          <div class="image">
            <van-image
              round
              width="1.2rem"
              height="1.2rem"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <div class="name">丿烟鬼丿</div>
          <div class="baseInfo">
            <div>&nbsp;18 关注&nbsp;</div>
            <div>&nbsp;03 粉丝&nbsp;</div>
            <div>&nbsp;Lv.6&nbsp;</div>
          </div>
          <div class="otherInfo">
            <div>&nbsp;重庆市&nbsp;</div>
            <div>&nbsp;村龄3年&nbsp;</div>
          </div>
          <div class="changeInfo">
            <div @click="toMaterial">&nbsp;编辑资料&nbsp;</div>
            <div>&nbsp;⬇&nbsp;</div>
          </div>
        </div>
      </v-touch>
      <!-- 中间部分 -->

      <!-- 吸顶模块 -->
      <van-sticky @change="change_sticky" @scroll="change_back">
        <van-tabs
          class="off_top"
          @click="to_swipe"
          background="none"
          line-height="7px"
          v-model="activeName"
        >
          <van-tab title="主页" name="0"></van-tab>
          <van-tab title="动态" name="1"> </van-tab>
          <van-tab title="播客" name="2"> </van-tab>
        </van-tabs>
      </van-sticky>

      <!--个人详情 -->
      <section class="table">
        <van-swipe @change="onChangeSwipe" ref="swipe">
          <van-swipe-item>
            <section class="BaseInfo">
              <div class="little">
                <div class="first_div">
                  <div class="title">基本信息</div>
                  <div><i class="viliager">&nbsp;领取村民证&nbsp;</i></div>
                </div>
                <div class="left_div">
                  <div>村龄：</div>
                  <div>3年</div>
                </div>
                <div class="left_div">
                  <div>性别：</div>
                  <div>男</div>
                </div>
                <div class="left_div">
                  <div>地区：</div>
                  <div>重庆市 重庆市</div>
                </div>
              </div>
            </section>
            <SongList
          /></van-swipe-item>
          <van-swipe-item><my-trends /></van-swipe-item>
          <van-swipe-item><PodCast /></van-swipe-item>
        </van-swipe>
      </section>
    </div>
  </div>
</template>

<script>
import Slideout from "slideout";
import SongList from "@/components/userHome/SongList.vue";
import MyTrends from "@/components/trends/MyTrends";
import PodCast from "@/components/pod/PodCast";
import LeftNav from "@/components/LeftNav/LeftNav.vue";
export default {
  name: "UserMid",
  data() {
    return {
      show: false,
      top_show: false,
      a: 1,
      activeName: "0",
    };
  },
  components: { SongList, MyTrends, PodCast, LeftNav },

  methods: {
    // 两模块互动函数
    change_back({ isFixed }) {
      this.$refs.top_bar.style.backgroundColor = isFixed
        ? "rgba(255, 255, 255)"
        : "";

      console.log();
    },
    onChangeSwipe(index) {
      this.activeName = String(index);
    },
    to_swipe(index) {
      this.$refs.swipe.swipeTo(index);
    },

    // 去编辑资料界面
    toMaterial() {
      this.$router.push("/Material");
    },

    // 吸顶函数
    change_sticky(index, value) {
      this.top_show = index;

      return index;
    },

    //滑动函数
    swiperDirection(i) {
      //1向左滑2向右滑

      if (i == 1) {
        this.$bus.$emit("to_opacity", 1);
      }
    },
  },
  // van-tabs__line
  mounted() {
    let slideout = new Slideout({
      panel: this.$refs.enters,
      menu: this.$refs.body,
      padding: 256,
      tolerance: 70,
      duration: 600,
      easing: "cubic-bezier(.32,2,.55,.27)",
    });
    this.$refs.btn.addEventListener("click", () => {
      slideout.toggle();

      if (slideout.isOpen()) {
        this.$refs.btn.style.transform = "translateX(5rem)";
        this.show = true;
        this.$refs.top_bar.style.background = "none";
      } else {
        this.$refs.btn.style.transform = "translateX(0rem)";
        this.show = false;
        this.$refs.top_bar.style.background = "rgba(242, 242, 242)";
        this.$refs.top_bar.style.transition = "0.6s ease";
      }

      this.$refs.btn.style.transition = "0.6s ease";
    });
    slideout.on("translatestart", () => {
      this.show = true;

      this.$refs.top_bar.style.background = "none";
    });

    slideout.on("translate", (translated) => {
      this.$refs.btn.style.transform = `translateX(0)`;
      this.$refs.overlay.style.opacity = translated / 270;
    });

    slideout.on("translateend", () => {
      this.$refs.top_bar.style.background = "rgba(242, 242, 242)";
      this.$refs.top_bar.style.transition = "1s ease";

      this.show = false;
    });
  },
};
</script>


<style lang="less" scoped>
.van-button--primary {
  display: none;
}
.icon {
  font-weight: 400;
  font-size: 0.24rem;
}

.UerMid {
  width: 90%;
  margin: 0 auto;
  height: 3rem;
  border-radius: 15px;
  box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.18);
  background-color: rgba(255, 255, 255);
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: space-evenly;
  .image .van-image {
    margin-top: -0.6rem;
  }
  .name {
    font-size: 0.4rem;
    font-weight: 700;
  }
  .baseInfo {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    text-align: center;
    justify-content: space-evenly;
    div {
      line-height: 0.34rem;

      border-radius: 10px;
    }
  }
  .otherInfo {
    width: 30%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    text-align: center;
    justify-content: space-evenly;
    div {
      line-height: 0.38rem;
      border: 1px solid rgb(194, 189, 189);
      border-radius: 10px;
    }
  }
  .changeInfo {
    width: 30%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    text-align: center;
    justify-content: space-evenly;
    div {
      line-height: 0.38rem;

      border: 1px solid rgb(125, 125, 125);
      border-radius: 10px;
    }
  }
}

.table {
  margin-top: 0.4rem;
  background-color: rgba(255, 255, 255);

  .van-tabs__line {
    bottom: 20px !important ;
  }
}

.BaseInfo {
  width: 90%;
  margin: 0.4rem auto;
  height: 3rem;
  border-radius: 15px;
  box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.18);
  .little {
    width: 90%;
    height: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    .left_div {
      display: flex;
      flex-flow: row nowrap;
      text-align: start;
      justify-content: start;
    }
    .first_div {
      display: flex;
      flex-flow: row nowrap;
      text-align: start;
      justify-content: space-between;
      .viliager {
        text-align: center;
        border: 1px solid #c2bdbd;
        border-radius: 10px;
      }
    }
  }
  .title {
    line-height: 0.7rem;
    font-size: 0.4rem;
    font-weight: 600;
    margin-left: 0.1rem;
  }
}

// 吸顶导航

.off_top {
  margin-top: 1rem;
  background-color: rgba(255, 255, 255);
}

.top_bar {
  position: fixed;

  top: 0;
  display: flex;
  width: 100%;
  height: 1rem;
  flex-flow: row nowrap;
  justify-content: space-between;
  // background-color: rgba(242, 242, 242);
  z-index: 5;
  .mid {
    font-size: 0.4rem;
    font-weight: 500;
  }
  .left {
    margin: 0.1rem 0 0 0.1rem;
  }
  .right {
    margin: 0.1rem 0.1rem 0 0;
  }
}

// 切入侧边导航

.enter {
  position: fixed;
  width: 100%;
  height: 13.4rem;
  background-color: white;
  z-index: 999;
  top: 0;
  left: -7.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: start;
}

// 控制侧边栏
</style>
