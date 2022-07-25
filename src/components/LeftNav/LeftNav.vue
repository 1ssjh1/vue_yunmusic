<template>
  <div class="hull">
    <section class="title">
      <div class="self">
        <img
          src="https://img2.baidu.com/it/u=1994380678,3283034272&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1658768400&t=f411337655fed4b64cbb7d0796940731"
          alt=""
        />
        <p>烟鬼丿 ></p>
      </div>

      <p class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-vip"></use>
        </svg>
      </p>
    </section>
    <section class="message">
      <div class="item">
        <div class="left">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>我的消息</div>
        </div>
        <div class="right">
          <div>99</div>
          <div>></div>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>云贝中心</div>
        </div>
        <div class="right">
          <div>签到</div>
          <div>></div>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>创作者服务中心</div>
        </div>
        <div class="right">
          <div></div>
          <div>></div>
        </div>
      </div>
    </section>

    <section class="waiter">
      <div class="item">
        <div class="right">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>web前端</div>
        </div>
        <div class="left">
          <div>🦆</div>
          <div>></div>
        </div>
      </div>
      <div class="item">
        <div class="right">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>web后端</div>
        </div>
        <div class="left">
          <div>🐟</div>
          <div>></div>
        </div>
      </div>
      <div class="item">
        <div class="right">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>运维</div>
        </div>
        <div class="left">
          <div>🐎</div>
          <div>></div>
        </div>
      </div>
      <div class="item">
        <div class="right">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>UI</div>
        </div>
        <div class="left">
          <div>🐟</div>
          <div>></div>
        </div>
      </div>
    </section>
    <section class="waiter">
      <div class="item">
        <div class="right">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>云村有票</div>
        </div>
        <div class="left">
          <div>🐂</div>
          <div>></div>
        </div>
      </div>
      <div class="item">
        <div class="right">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>商城</div>
        </div>
        <div class="left">
          <div>🦆</div>
          <div>></div>
        </div>
      </div>
      <div class="item">
        <div class="right">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>Beat交易平台</div>
        </div>
        <div class="left">
          <div>🐟</div>
          <div>></div>
        </div>
      </div>
      <div class="item">
        <div class="right">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
          </div>
          <div>务游戏专区</div>
        </div>
        <div class="left">
          <div>🐎</div>
          <div>></div>
        </div>
      </div>
    </section>
    <section class="leave">
      <div>退出登录/关闭</div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.hull {
  width: 68.5%;
  border: 1px solid pink;
  section {
    width: 96%;
    border-radius: 15px;
    box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.18);
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .self {
      display: flex;
      align-items: center;
      margin-left: 0.2rem;
    }
    .right {
      margin-right: 0.2rem;
    }
    img {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 0.7rem;
    }
  }
  .message {
    margin-top: 0.3rem;
  }
  .item {
    padding: 0.18rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s ease;
    .left {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }
    .right {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }
  }

  .item:active {
    background-color: rgb(192, 192, 192);
  }
  .waiter {
    margin-top: 0.3rem;
  }

  .leave {
    height: 1rem;
    margin-top: 0.3rem;
    div {
      width: 100%;
      height: 100%;
      line-height: 1rem;
      font-size: 0.36rem;
      text-align: center;
      color: red;
    }
  }
}
</style>