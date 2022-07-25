<template>
  <div>
    <div class="card">
      <section class="_title">
        <van-image
          round
          width="0.6rem"
          height="0.6rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="time_name">
          <p>烟鬼 &nbsp;&nbsp; 分享单曲:</p>
          <i>05:11</i>
        </div>
      </section>
      <section class="content">
        <p>感谢大家对我的支持！！！！！！！</p>
        <div class="imglist">
          <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" />
          <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" />
        </div>
      </section>
      <section class="music">
        <div class="image">
          <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" />
        </div>
        <div class="word">
          <p>javascript</p>
          <i> DOUGLAS deep</i>
        </div>
      </section>
      <section class="mutual">
        <div>
          <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
        </div>

        <div>
          <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
            <use xlink:href="#icon-xiaoxi"></use>
          </svg>
        </div>
        <div>
          <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
            <use xlink:href="#icon-tuijian"></use>
          </svg>
        </div>
      </section>
    </div>

    <!-- <van-card
      num="2"
      price="2.00"
      desc="烟鬼"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card> -->
  </div>
</template>

<script>
export default {
  name: "Action",
};
</script>

<style lang="less" scoped>
.card {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  .touxiang {
    width: 1rem;
    height: 1rem;
  }
  section {
    width: 100%;
    padding: 0.3rem;
  }
  ._title {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 0.15rem;
    letter-spacing: 0.5px;
    .time_name {
      margin-left: 0.2rem;
    }
  }
  .content {
    p {
      font-weight: 575;
      font-size: 0.3rem;
      line-height: 0.8rem;
    }
    .imglist {
      display: flex;
    }
    img {
      width: 1.6rem;
      height: 1.6rem;
      margin-left: 0.2rem;
      border-radius: 0.2rem;
    }
  }
  .music {
    padding: 0.1rem;
    border-radius: 0.2rem;
    background-color: rgb(215, 214, 214);

    display: flex;
    align-items: center;
    transition: 0.5s ease;
    .image {
      width: 0.8rem;
      height: 0.8rem;
      border: 1px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
    .word {
      margin-left: 0.2rem;
    }
  }
  .music:active {
    background-color: rgb(164, 164, 164);
  }

  .mutual {
    display: flex;
    margin-bottom: 7px;
  }
}
</style>
