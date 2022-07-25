<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in swiperList" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      banderList: [],
    };
  },

  computed: {
    ...mapState("swiper", ["swiperList"]),
  },

  methods: {
    ...mapActions("swiper", ["addBander"]),
  },
  mounted() {
    this.addBander();
  },
  // setup() {
  //   const state = reactive({
  //     images: [
  //       "https://img.yzcdn.cn/vant/apple-1.jpg",
  //       "https://img.yzcdn.cn/vant/apple-2.jpg",
  //     ],
  //   });
  //   onMounted(async () => {
  //     axios.get("http://localhost:3000/banner").then((res) => {
  //       console.log(res);
  //       state.images = res.data.banners;
  //       console.log(state.images);
  //     });
  //     let res = await getBanner();
  //     state.images = res.data.banners;
  //     console.log(res);
  //   });
  //   return { state };
  // },
};
</script>
<style lang="less">
#swiperTop {
  //需要在上面自己添加一个id
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>