<template>
  <div>
    <div class="items" @click="go">
      <div class="img">
        <img :src="itemContent.picUrl" alt="" />
      </div>
      <div class="content van-ellipsis">
        <p class="theName">{{ itemContent.name }}</p>
        <div>
          <i> {{ itemContent.trackCount }}首 &nbsp;</i>
          <i> 播放 : {{ number }} 次</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import change_number from "@/method/number";
export default {
  name: "SongItem",
  props: ["itemContent"],

  // data() {
  //   return {
  //     number:
  //   }
  // },
  methods: {
    go() {},
  },
  computed: {
    number: function () {
      return change_number(this.itemContent.playCount);
    },
  },
};
</script>

<style lang="less" scoped>
.items {
  width: 6.075rem;
  height: 1.3rem;
  display: flex;
  flex-flow: row nowrap;

  justify-content: start;
  align-items: center;
  .img {
    z-index: 1;
    img {
      border: 1px solid white;
      border-radius: 0.22rem;
      width: 1.1rem;
      height: 1.1rem;
      z-index: 1;
      word-spacing: 2px;
    }
  }
  .content {
    p {
      line-height: 0.7rem;
      font-size: 0.3rem;
      font-weight: 600;
      margin-left: 0.2rem;
      text-align: start;
      letter-spacing: 0.7px;
      white-space: nowrap;
      overflow: hidden; //文本超出隐藏
      text-overflow: ellipsis; //文本超出省略号替代
    }
    div {
      display: flex;
      justify-content: start;
      margin-left: 0.2rem;
    }
  }
}
</style>
