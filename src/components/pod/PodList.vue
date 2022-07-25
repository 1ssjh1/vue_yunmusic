<template>
  <div>
    <div class="card">
      <div class="title">我的声音 <i>(2)</i></div>
      <div class="other">
        <div>
          <img
            src="https://p2.music.126.net/psth_fcCEKjDVXRtijL_DQ==/1383185632930533.jpg"
            alt=""
          />
        </div>
        <p>老人和太阳</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PodList",
};
</script>

<style lang="less" scoped>
.card {
  width: 90%;
  margin: 0.3rem auto;
  border-radius: 15px;
  box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: start;
  padding: 0.2rem;
  .title {
    width: 90%;
    font-size: 0.32rem;
    font-weight: 575;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    i {
      font-size: 0.2rem;
      font-weight: 400;
    }
  }
  .other {
    width: 90%;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    p {
      margin-left: 0.2rem;
    }
  }
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 0.3rem;
  }
}
</style>