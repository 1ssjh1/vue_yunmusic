<template>
  <div>
    <div class="All">
      <div class="title">
        <div class="create">创建的歌单</div>
        <div class="details">
          <i>&nbsp; &nbsp;({{ palyList.length - 1 }}个,</i
          ><i>被收藏 {{ number }}次</i>)
        </div>
      </div>

      <div class="AllSongList">
        <SongItem
          v-for="(item, index) in palyList.slice(1, palyList.length)"
          :key="index"
          :itemContent="item"
          @click="to_go(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import change_number from "@/method/number";

import SongItem from "./SongItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "SongList",
  components: {
    SongItem,
  },
  data() {
    return {
      number: "1",
      state: {
        imageList: [
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123123123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123123123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123123123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123123123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123123123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123123123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
          {
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            title: "123123123123123123123",
            content: {
              numbers: 123,
              times: 456,
            },
          },
        ],
      },
    };
  },

  watch: {
    // 监视他的父亲 变了没有
    palyList: async function () {
      this.number = change_number(this.palyList[1].trackNumberUpdateTime);
    },
  },
  computed: {
    ...mapState("song", ["palyList"]),
  },
  methods: {
    to_go(value) {
      console.log(1);
      console.log(value);
    },
    ...mapActions("song", { addSongs: "addSongs" }),
  },
  mounted() {
    this.addSongs();
  },
};
</script>
<style lang="less" scoped>
.All {
  width: 90%;
  margin: 0.3rem auto;
  border-radius: 15px;
  box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.18);
  background-color: rgba(255, 255, 255);

  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: start;
  .title {
    width: 90%;
    height: 1.5rem;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    text-align: center;
    justify-content: start;
    .create {
      line-height: 1.5rem;
      font-size: 0.4rem;
      font-weight: 600;
    }
    .details {
      line-height: 1.5rem;
    }
  }
  .AllSongList {
    margin: 0 auto;
  }
}
</style>
