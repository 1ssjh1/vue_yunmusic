<template>
  <div>
    <TopNav />
    <SwpierTop />
    <IconList />
    <MusicList />
  </div>
</template>
<script>
import IconList from "@/components/search/IconList";
import MusicList from "@/components/search/MusicList";

import SwpierTop from "@/components/search/SwpierTop";

import TopNav from "@/components/search/TopNav";

export default {
  name: "Search",
  components: {
    IconList,
    MusicList,
    SwpierTop,
    TopNav,
  },
};
</script>
<style lang="less" scoped>
</style>