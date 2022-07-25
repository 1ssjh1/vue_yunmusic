<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="130"
        class="my-swpie"
        :show-indicators="false"
      >
        <van-swipe-item
          v-for="item in palyList.slice(1, palyList.length - 1)"
          :key="item.id"
        >
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <img :src="item.picUrl" alt="" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gl-play-copy"></use>
              </svg>
              <!-- {{ change_number(item.playCount) }} -->
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import change_number from "@/method/number";

// import SongItem from "./SongItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "SongList",
  // components: {
  //   SongItem,
  // },
  data() {
    return {
      number: "1",
      state: {},
    };
  },

  // watch: {
  //   // 监视他的父亲 变了没有
  //   palyList: async function () {
  //     this.number = change_number(this.palyList[1].trackNumberUpdateTime);
  //   },
  // },
  computed: {
    ...mapState("song", ["palyList"]),
  },
  methods: {
    ...mapActions("song", { addSongs: "addSongs" }),
  },
  mounted() {
    this.addSongs();
    console.log(this.palyList);
  },
};
</script>
<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 3.6rem;

    .van-swipe-item {
      //   margin-right: 0.14rem;
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      img {
        width: 100%;
        height: 2.4rem;
        border-radius: 0.2rem;
        //   position: absolute;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .name {
        //   position: absolute;
        bottom: 0px;
      }
    }
  }
}
</style>