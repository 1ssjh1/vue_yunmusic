<template>
  <div class="body">
    <!-- 弹窗插件-->
    <Dialog></Dialog>
    <!-- 弹窗插件-->

    <div class="top">
      <div class="left" @click="ToUser">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-zuojiantouzhixiangzuojiantou"></use>
        </svg>
      </div>
      <div class="right">我的资料</div>
    </div>

    <div class="mid">
      <section>
        <div class="leftDiv">头像</div>
        <div class="rightImg">
          <van-image
            round
            width="0.8rem"
            height="0.8rem"
            :src="personList.imageUrl"
          />
          <!-- <img src="" alt="" /> -->
        </div>
      </section>
      <section @click="change_nam">
        <div class="leftDiv">昵称</div>
        <div>{{ personList.name }}</div>
      </section>
      <section @click="btn_sex.show = true">
        <div class="leftDiv">性别</div>
        <div>{{ personList.sex }}</div>
      </section>
      <section @click="change_unit">
        <div class="leftDiv">大学</div>
        <div>{{ personList.university }}</div>
      </section>
      <section>
        <div class="leftDiv">简介</div>
        <div>{{ personList.content }}</div>
      </section>
      <section>
        <div class="leftDiv">音乐标签</div>
        <div>{{ personList.tag }}</div>
      </section>
    </div>
    <div class="bottom">
      <section>
        <div class="leftDiv">二维码</div>
        <div></div>
      </section>
      <section @click="btn_city.cityShow = true">
        <div class="leftDiv">地区</div>
        <div>
          {{ personList.city[0] }}<i>&nbsp;&nbsp;</i> {{ personList.city[1] }}
        </div>
      </section>
    </div>
    <!-- 城市选择 -->
    <van-area
      class="area"
      title="请选择省市"
      :area-list="btn_city.areaList"
      :columns-num="2"
      @cancel="btn_city.cityShow = false"
      @confirm="go_city"
      v-show="btn_city.cityShow"
    />

    <van-action-sheet
      v-model="btn_sex.show"
      :actions="btn_sex.actions"
      cancel-text="取消"
      close-on-click-action
      @select="re_select_sex"
    />
    <!-- 改大学 -->
    <van-action-sheet
      v-model="school.show_uni"
      title=" 填写你的大学 "
      @close="close_uni"
    >
      <div class="content">
        <div class="add_content">
          <div>在这儿填:</div>
          <input
            type="text "
            v-model="school.value_uni"
            placeholder="请输入你的大学"
          />
        </div>
      </div>
    </van-action-sheet>

    <!-- 改名字 -->
    <van-action-sheet
      v-model="btn_name.show_name"
      title=" 填写你的名字 "
      @close="close_name"
    >
      <div class="content">
        <div class="add_content">
          <div>在这儿填:</div>
          <input
            type="text "
            v-model="btn_name.value_name"
            placeholder="请输入你的名字"
          />
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
// 引入城市数据
import { areaList } from "@vant/area-data";
import { Dialog } from "vant";
export default {
  name: "Material",
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      btn_name: {
        value_name: "",
        show_name: false,
      },
      school: {
        value_uni: "",
        show_uni: false,
      },

      btn_city: {
        areaList: areaList,
        cityShow: false,
      },
      btn_sex: {
        show: false,
        actions: [
          { name: "男🚹", color: "#ee0a24" },
          { name: "女🚺", color: "#ee0a24" },
          { name: "啥也不是", disabled: true },
        ],
      },
    };
  },
  computed: {
    ...mapState("user", ["personList"]),
  },

  methods: {
    // 改变大学
    change_unit() {
      this.school.show_uni = true;
    },
    close_uni() {
      if (
        !/[^\u4E00-\u9FA5]/g.test(this.school.value_uni) &&
        this.school.value_uni
      ) {
        this.change_uni(this.school.value_uni);
      } else {
        Dialog.alert({
          title: "错误",
          message: "大学只能是中文（china！）",
        }).then(() => {
          // on close
        });
      }
    },

    // 改名字

    change_nam() {
      this.btn_name.show_name = true;
    },
    close_name() {
      console.log(this.btn_name.value_name);
      if (
        !/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g.test(this.btn_name.value_name) &&
        this.btn_name.value_name
      ) {
        this.change_name(this.btn_name.value_name);
      } else {
        Dialog.alert({
          title: "错误",
          message: "不能输入奇怪的字符",
        }).then(() => {
          // on close
        });
      }
    },

    re_select_sex(action, index) {
      this.change_sex(action.name);
    },

    ToUser(action, index) {
      this.$router.push("/home");
    },
    go_city(index) {
      this.btn_city.cityShow = false;
      this.change_city([
        [index[0].name, index[1].name],
        [index[0].code, index[1].code],
      ]);
    },
    ...mapActions("user", {
      change_name: "change_name",
      change_sex: "change_sex",
      change_city: "change_city",
      change_uni: "change_uni",
    }),
  },
};
</script>
<style lang="less" scoped>
.content {
  height: 5rem;
}
.add_content {
  width: 90%;
  margin: 0 auto;
  height: 1.5rem;
  border: 1px solid;
  border-radius: 0.3rem;
  font-size: 0.36rem;
  background-color: rgb(247, 248, 250);
  display: flex;
  // justify-content: flex-start;
  div {
    margin-right: 0.1rem;

    line-height: 1.425rem;
  }
  input {
    vertical-align: baseline;
  }
}
.body {
  background-color: rgba(219, 219, 219, 0.1);
}
.top {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  .left {
    margin-left: 0.4rem;
  }
  .right {
    font-size: 0.4rem;
    font-weight: 650;
    margin-left: 0.4rem;
  }
}

.mid {
  width: 100%;
  height: 7.2rem;
  margin-top: 0.19rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.18);
  background-color: aliceblue;
}
.bottom {
  width: 100%;
  height: 5rem;
  margin-top: 0.19rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.18);
  background-color: aliceblue;
}

.mid,
.bottom {
  section {
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;

    div {
      line-height: 1.2rem;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
    }
  }
}
.leftDiv {
  font-size: 0.27rem;
  font-weight: 570;
}
.rightImg {
  display: flex;
  align-items: center;
  justify-content: center;
}
.area {
  position: fixed;
  width: 100%;
  z-index: 99;
  bottom: 0rem;
  left: 0rem;
}
</style>