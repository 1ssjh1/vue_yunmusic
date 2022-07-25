<template>
  <div>
    <ItemMusicTop />
    <!-- <ItemMusicTop :id="this.$route.query.id" /> -->

    <ItemMusicList />
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import ItemMusicTop from "@/components/item/ItemMusicTop.vue";
import ItemMusicList from "@/components/item/ItemMusicList.vue";
export default {
  name: "ItemMusic",
  components: {
    ItemMusicTop,
    ItemMusicList,
  },
  data() {
    return {};
  },

  // computed: {
  //   ...mapState("oneList", ["playlist", "privileges"]),
  // },
  // methods: {
  //   ...mapActions("oneList", { addOneList: "addOneList" }),
  // },

  // mounted() {
  //   (async () => {
  //     let res = await getMusicItemList(this.$route.query.id);
  //     this.state.playlist = res.playlist;

  //     sessionStorage.setItem("itemDetail", JSON.stringify(this.state));
  //   })();
  // this.addOneList(this.$route.query.id);

  // console.log(this.playList, this.privileges);
  // },
  // setup() {
  //   const state = reactive({
  //     playlist: {}, //歌单的详情页的数据
  //     itemList: [], //歌单的歌曲
  //   });
  //   onMounted(async () => {
  //     let id = useRoute().query.id;
  //     console.log(id);
  //     //   获取歌单详情页
  //     let res = await getMusicItemList(id);
  //     console.log(res);
  //     state.playlist = res.data.playlist;
  //     //   获取歌单的歌曲
  //     let result = await getItemList({ id, limit: 10, offset: 0 });
  //     console.log(result);
  //     state.itemList = result.data.songs

  //     //   防止页面刷新，数据丢失，将数据保存到sessionStorage中
  //     sessionStorage.setItem("itemDetail", JSON.stringify(state));
  //   });
  //   return { state };
  // },
  // components: {
  //   ItemMusicTop,
  //   ItemMusicList,
  // },
};
</script>