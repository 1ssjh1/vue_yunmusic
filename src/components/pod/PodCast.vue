<template>
  <div>
    <div class="All">
      <div class="title">
        <div class="create">播客</div>
        <div class="details"></div>
      </div>
      <div class="AllSongList"></div>
    </div>
    <PodList />
    <PodList />
  </div>
</template>

<script>
import PodList from "./PodList.vue";
export default {
  name: "PodCast",
  components: { PodList },
};
</script>


<style lang="less" scoped>
.All {
  width: 90%;
  margin: 0.3rem auto;
  border-radius: 15px;
  box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.18);
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
