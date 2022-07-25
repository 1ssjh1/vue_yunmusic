<template>
  <div>
    <div class="All">
      <div class="title">
        <div class="create">我的动态</div>
        <div class="details"></div>
      </div>
      <div class="AllSongList"></div>
    </div>

    <div class="trends_list">
      <Action></Action>
    </div>
  </div>
</template>

<script>
import Action from "./Actions.vue";
export default {
  name: "MyTrends",
  components: {
    Action,
  },
};
</script>

<style lang="less" scoped>
.All {
  width: 100%;
  margin: 0 auto;
  border-radius: 15px;
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
.trends_list {
  width: 90%;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.18);
  // :nth-child(n) {
  //   margin-top: 0.1rem;
  // }
}
</style>
